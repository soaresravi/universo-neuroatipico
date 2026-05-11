import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { supabase } from '../contexts/AuthContext';

import balaoImg from '../assets/balao.png';
import astronautaImg from '../assets/astronauta.png';

const NovaSenha = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { email } = location.state || { email: '' };
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleResetPassword = async () => {
       
        if (!senha || !confirmarSenha) {
            setError('Preencha todos os campos');
            return;
        }
    
        if (senha.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres');
            return;
        }
    
        if (senha !== confirmarSenha) {
            setError('As senhas não conferem');
            return;
        }
    
        setLoading(true);
        setError('');
    
        try {

            const { data, error } = await supabase.rpc('atualizar_senha', {
                email_usuario: email,
                nova_senha: senha
            });
    
            if (error) throw error;
    
            if (data) {
                
                setShowSuccess(true);
                
                setTimeout(() => {
                    navigate('/login');
                }, 3000);

            } else {
                setError('Usuário não encontrado');
            }
    
        } catch (error) {
            console.error('Erro:', error);
            setError('Erro ao alterar senha. Tente novamente.');
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
            marginBottom: '60px',
            letterSpacing: '8%',
            marginTop: '-180px'
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
            marginBottom: '10px'
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
            width: '100%',
            marginTop: '10px'
        },

        error: {
            color: '#FF6B6B',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            textAlign: 'center'
        },

        balao: {
            position: 'absolute',
            bottom: '200px',
            left: '80px',
            maxWidth: '240px',
            zIndex: 2
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
            fontSize: '18px',
            padding: '10px',
            width: '80%'
        },

        astronauta: {
            position: 'absolute',
            bottom: 0,
            left: '-30px',
            width: '200px',
            height: 'auto',
            zIndex: 1
        },

        successOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        },

        successModal: {
            backgroundColor: '#1B3C83',
            borderRadius: '20px',
            padding: '30px',
            width: '90%',
            maxWidth: '350px',
            textAlign: 'center',
            border: '2px solid #11FF00'
        },

        successIcon: {
            marginBottom: '20px'
        },

        successTitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '24px',
            color: '#11FF00',
            marginBottom: '15px'
        },

        successTexto: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '16px',
            color: 'white',
            marginBottom: '20px'
        }
    };

    return (

    <div style={styles.container}>
        
        <button style={styles.botaoVoltar} onClick={() => navigate(-1)}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
        <h1 style={styles.titulo}>Nova senha</h1>
        <input type="text" style={styles.input} placeholder="Digite a nova senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <input type="text" style={styles.input} placeholder="Confirme a nova senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
        <button style={styles.botao} onClick={handleResetPassword} disabled={loading}> {loading ? 'Alterando...' : 'Alterar senha'} </button>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.balao}>
            <img src={balaoImg} alt="balao" style={styles.balaoImagem} />
            <div style={styles.balaoTexto}>Anote para não esquecer novamente!</div>
        </div>

        <img src={astronautaImg} alt="astronauta" style={styles.astronauta} />

        {showSuccess && (
            
            <div style={styles.successOverlay}>
                
                <div style={styles.successModal}>
                    
                    <div style={styles.successIcon}>
                        <CheckCircle size={60} color="#11FF00" />
                    </div>
                    
                    <div style={styles.successTitulo}>Senha alterada!</div>

                    <div style={styles.successTexto}>
                        Sua senha foi atualizada com sucesso!<br /> Redirecionando para o login...
                    </div>

                </div>

            </div>

        )}

    </div>
    );
};

export default NovaSenha;