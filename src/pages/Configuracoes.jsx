import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, X } from 'lucide-react';

const Configuracoes = () => {
  
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const styles = {

        container: {
            backgroundColor: '#1B3C83',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
      
        botaoSair: {
            backgroundColor: '#FF4548',
            border: 'none',
            borderRadius: '50px',
            padding: '15px 30px',
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '20px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            width: '100%',
            maxWidth: '250px'
        },

        overlay: {
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
      
        modal: {
            backgroundColor: '#1B3C83',
            borderRadius: '20px',
            padding: '30px',
            width: '90%',
            maxWidth: '400px',
            textAlign: 'center',
            border: '2px solid #11FF00',
            position: 'relative'
        },
        
        modalTitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '24px',
            color: '#11FF00',
            marginBottom: '20px'
        },
        
        modalTexto: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: 'white',
            marginBottom: '30px'
        },
        
        modalBotoes: {
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
        },
        
        modalBotaoConfirmar: {
            backgroundColor: '#FF4548',
            border: 'none',
            borderRadius: '50px',
            padding: '10px 25px',
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: 'white',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        },
        
        modalBotaoCancelar: {
            backgroundColor: '#D9D9D9',
            border: 'none',
            borderRadius: '50px',
            padding: '10px 25px',
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: '#1B3C83',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        },
        
        modalFechar: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white'
        }

    };
    
    return (
    
    <div style={styles.container}>
        
        <button style={styles.botaoSair} onClick={() => setShowModal(true)}> <LogOut size={24} color="white" /> Sair da conta </button>
  
        {showModal && (
        
            <div style={styles.overlay}>
                
                <div style={styles.modal}>
                    
                    <button style={styles.modalFechar} onClick={() => setShowModal(false)}> <X size={24} color="white" /> </button>
                    <div style={styles.modalTitulo}>Atenção!</div>
                    
                    <div style={styles.modalTexto}>
                        Tem certeza que deseja sair da sua conta?
                    </div>
                    
                    <div style={styles.modalBotoes}>
                        <button style={styles.modalBotaoCancelar} onClick={() => setShowModal(false)}> Cancelar </button>
                        <button style={styles.modalBotaoConfirmar} onClick={handleLogout}> Sair </button>
                    </div>

                </div>

            </div>
            
        )}
      </div>
    );
};

export default Configuracoes;