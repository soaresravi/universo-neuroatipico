import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import fundoLogin from '../assets/fundo-login.jpeg';
import neuroIcon from '../assets/neurodiversidade.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/home');
        } catch (error) {
            setError('Email ou senha inválidos');
        } finally {
            setLoading(false);
        }

    };

    const styles = {

        container: {
            backgroundImage: `url(${fundoLogin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '110vh',
            width: '100vw',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        card: {
            padding: '0 30px',
            width: '100%',
            maxWidth: '400px',
            marginTop: '-30px',
            marginBottom: '150px'
        },
        
        titulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '70px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        
        labelContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
        },
        
        label: {
            fontFamily: "'Cal Sans', sans-serif",
            color: 'white',
            fontSize: '40px',
            fontWeight: '500',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        },
        
        icon: {
            width: '45px',
            height: '36px'
        },
        
        input: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: 'white',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#0051FF',
            marginBottom: '20px',
            outline: 'none',
            boxSizing: 'border-box'
        },

        inputSenha: {
            marginBottom: '10px',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: 'white',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#0051FF',
            outline: 'none',
            boxSizing: 'border-box'
        },
        
        esqueceuContainer: {
            textAlign: 'right',
            marginBottom: '30px'
        },
        
        esqueceuLink: {
            fontFamily: "'Inter', sans-serif",
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '12px',
            cursor: 'pointer',
            background: 'none',
            border: 'none'
        },
        
        botaoLogin: {
            width: '100%',
            padding: '4px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: '#0051FF',
            color: 'white',
            fontFamily: "'Cal Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'opacity 0.3s'
        },
        
        error: {
            color: '#ff6b6b',
            textAlign: 'center',
            marginTop: '15px',
            fontFamily: "'Inter', sans-serif"
        }

    };

    return (

    <div style={styles.container}>
        <div style={styles.card}>
            
            <h1 style={styles.titulo}>Login</h1>
            
            <form onSubmit={handleSubmit}>
                
                <div style={styles.labelContainer}>
                    <label style={styles.label}>Email</label>
                    <img src={neuroIcon} alt="neuro" style={styles.icon} />
                </div>
                
                <input type="email" style={styles.input} placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label style={styles.label}>Senha</label>
                <input type="text" style={styles.inputSenha} placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                
                <div style={styles.esqueceuContainer}>
                    <button type="button" style={styles.esqueceuLink} onClick={() => navigate('/esqueci-senha')}> Esqueceu a senha? </button>
                </div>
                
                <button type="submit" style={styles.botaoLogin} disabled={loading}> {loading ? 'Entrando...' : 'Login'} </button>
                {error && <p style={styles.error}>{error}</p>}
                
            </form>
            
        </div>
    </div>
    );
};

export default Login;