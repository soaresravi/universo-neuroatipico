import React, { createContext, useState, useEffect, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        supabase.auth.getSession().then(({ data: { session } }) => {

            const usuario = session?.user || null;

            if (usuario) {

                const lastLogin = localStorage.getItem('lastLogin');
                const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

                if (lastLogin && parseInt(lastLogin) > sevenDaysAgo) {
                    setUser(usuario);
                } else {
                    localStorage.removeItem('lastLogin');
                    supabase.auth.signOut();
                    setUser(null);
                }

            } else {
                setUser(null);
            }

            setLoading(false);

        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {

            const usuario = session?.user || null;

            if (usuario) {
                localStorage.setItem('lastLogin', Date.now().toString());
            } else {
                localStorage.removeItem('lastLogin');
            }

            setUser(usuario);

        });

        return () => subscription.unsubscribe();

    }, []);

    const login = async (email, password) => {
        
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        if (data?.user) {
            
            const { error: updateError } = await supabase.from('usuarios').upsert({ 
                id: data.user.id, 
                email: data.user.email,
                ultimo_login: new Date().toISOString()
            });
            
            if (updateError) console.error('Erro ao atualizar último login:', updateError);
            localStorage.setItem('lastLogin', Date.now().toString());

        }

        return data;
    };

    const logout = async () => {
        localStorage.removeItem('lastLogin');
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}> { children } </AuthContext.Provider>
    );
};

export { supabase };