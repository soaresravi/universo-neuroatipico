import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Configuracoes = () => {
  
    const { logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };
    
    return (
    <div style={{ backgroundColor: '#1B3C83', minHeight: '100vh', padding: '20px', color: 'white' }}>
        <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '20px' }}>Sair</button>
    </div>
    );
};

export default Configuracoes;