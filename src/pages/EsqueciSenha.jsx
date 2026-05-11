import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../contexts/AuthContext';
import { solicitarRecuperacaoSenha } from '../services/emailService';

import balaoImg from '../assets/balao.png';
import astronautaImg from '../assets/astronauta.png';

const EsqueciSenha = () => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendCode = async () => {

        if (!email) {
            setError('Digite seu email');
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            setError('Digite um email válido');
            return;
        }
    
        setLoading(true);
        setError('');
    
        try {

            const { data: usuarios, error: userError } = await supabase.from('usuarios').select('email, nome').eq('email', email);
    
            if (userError || !usuarios || usuarios.length === 0) {
                setError('Email não cadastrado');
                setLoading(false);
                return;
            }
    
            const usuario = usuarios[0];
            const name = usuario.nome || 'Usuário';
            
            const resultado = await solicitarRecuperacaoSenha(email, name);
    
            if (resultado.success) {
                navigate('/verificar-codigo', { state: { email: email } });
            } else {
                setError(resultado.error || 'Erro ao enviar código. Tente novamente.');
            }
    
        } catch (error) {
            console.error('Erro:', error);
            setError('Erro ao processar solicitação');
        } finally {
            setLoading(false);
        }

    };

    const styles = {

        container: {
            backgroundColor: '#1B3C83',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'fixed'
        },

        botaoVoltar: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
        },

        titulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '32px',
            color: 'white',
            textAlign: 'center',
            marginBottom: '30px',
            letterSpacing: '5%',
            marginTop: '-280px'
        },

        input: {
            width: '100%',
            padding: '16px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: 'white',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            color: '#0D8804',
            outline: 'none',
            marginBottom: '20px'
        },

        botao: {
            backgroundColor: '#FF4548',
            border: 'none',
            borderRadius: '30px',
            padding: '10px',
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '30px',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            marginBottom: '20px',
            transition: 'opacity 0.3s',
            width: '100%'
        },

        error: {
            color: '#FF6B6B',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            marginTop: '5px',
            textAlign: 'center'
        },

        balao: {
            position: 'absolute',
            bottom: '250px',
            left: '80px',
            maxWidth: '240px',
            zIndex: 2,
        },

        balaoImagem: {
            width: '100%',
            height: 'auto',
            transform: 'scaleX(-1)'
        },

        balaoTexto: {
            position: 'absolute',
            top: '37%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#0051FF',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            padding: '10px',
            width: '80%'
        },

        astronauta: {
            position: 'absolute',
            bottom: 0,
            left: '-30px',
            width: '250px',
            height: 'auto',
            zIndex: 1
        }

    };

    return (
    
    <div style={styles.container}>
        
        <button style={styles.botaoVoltar} onClick={() => navigate('/login')}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
        <h1 style={styles.titulo}>Recuperar senha</h1>
        <input type="email" style={styles.input} placeholder="Digite o email cadastrado" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button style={styles.botao} onClick={handleSendCode} disabled={loading}> {loading ? 'Enviando...' : 'Enviar código'} </button>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.balao}>
            <img src={balaoImg} alt="balao" style={styles.balaoImagem} />
            <div style={styles.balaoTexto}>Enviaremos um código de verificação para o email cadastrado.</div>
        </div>

        <img src={astronautaImg} alt="astronauta" style={styles.astronauta} />

    </div>
    );
};

export default EsqueciSenha;
