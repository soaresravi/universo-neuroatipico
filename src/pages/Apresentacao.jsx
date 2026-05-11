import React from 'react';
import { useNavigate } from 'react-router-dom';
import fundoApresentacao from '../assets/fundo-apresentacao.jpeg';

const Apresentacao = () => {

    const navigate = useNavigate();

    const styles = {

        container: {
            backgroundImage: `url(${fundoApresentacao})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            margin: 0,
            padding: 0,
            overflow: 'auto'
        },

        titulo: {
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0,
            textAlign: 'center',
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            margin: 0,
            padding: '0 20px'
        },
        
        botaoVamos: {
            position: 'absolute',
            bottom: '200px',
            right: '20px',
            backgroundColor: '#0E1B36',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 24px',
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 2,
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            letterSpacing: '1px',
        },
        
        botaoCadastrado: {
            position: 'absolute',
            bottom: '130px',
            right: '20px',
            backgroundColor: '#0051FF',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 16px',
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 2,
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            letterSpacing: '1px',
        }
    };

    return (
        
        <div style={styles.container}>
            <h1 style={styles.titulo}> Universo<br />Neuroatípico </h1>
            <button style={styles.botaoVamos} onClick={() => navigate('/cadastro')}> Vamos começar! </button>
            <button style={styles.botaoCadastrado} onClick={() => navigate('/login')}> Já sou cadastrado </button>
        </div>

    );
};

export default Apresentacao;