import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { verificarCodigoRecuperacao } from '../services/emailService';

import balaoImg from '../assets/balao.png';
import astronautaImg from '../assets/astronauta.png';

const VerificarCodigo = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { email } = location.state || { email: '' };
    const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const inputs = useRef([]);

    useEffect(() => {
       
        if (inputs.current[0]) {
            inputs.current[0].focus();
        }

    }, []);

    const handleChange = (index, value) => {

        if (value.length > 1) return;

        const newCodigo = [...codigo];
        newCodigo[index] = value;
        setCodigo(newCodigo);
        setError('');

        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }

    };

    const handleKeyDown = (index, e) => {

        if (e.key === 'Backspace' && !codigo[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }

    };

    const handleVerify = async () => {

        const codigoCompleto = codigo.join('');

        if (codigoCompleto.length !== 6) {
            setError('Digite o código completo de 6 dígitos');
            return;
        }

        setLoading(true);
        setError('');

        const resultado = await verificarCodigoRecuperacao(email, codigoCompleto);

        if (resultado.valid) {
            navigate('/nova-senha', { state: { email: email } });
        } else {
            setError(resultado.error);
        }

        setLoading(false);

    };

    const styles = {

        container: {
            backgroundColor: '#1B3C83',
            height: '110vh',
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
            marginBottom: '5px',
            letterSpacing: '8%',
            marginTop: '-180px'
        },

        subtitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '22px',
            color: '#FCFF5B',
            textAlign: 'center',
            marginBottom: '10px'
        },

        emailText: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: '#11FF00',
            textAlign: 'center',
            marginBottom: '30px'
        },

        codigoContainer: {
            display: 'flex',
            gap: '12px',
            marginBottom: '30px'
        },

        inputCodigo: {
            width: '50px',
            height: '60px',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '1px solid black',
            textAlign: 'center',
            fontSize: '24px',
            fontFamily: "'Inter', sans-serif",
            color: '#1B3C83',
            boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
            outline: 'none'
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
        }

    };

    return (

    <div style={styles.container}>
       
        <button style={styles.botaoVoltar} onClick={() => navigate(-1)}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
        <h1 style={styles.titulo}>Verificação</h1>
        <p style={styles.subtitulo}>Digite o código enviado para</p>
        <p style={styles.emailText}>{email}</p>

        <div style={styles.codigoContainer}> 
            {[0, 1, 2, 3, 4, 5].map((index) => ( 
                <input key={index} ref={(el) => (inputs.current[index] = el)} type="text" maxLength={1} style={styles.inputCodigo} value={codigo[index]} onChange={(e) => handleChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} />
            ))}
        </div>

        <button style={styles.botao} onClick={handleVerify} disabled={loading}> {loading ? 'Verificando...' : 'Verificar código'} </button>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.balao}>
            <img src={balaoImg} alt="balao" style={styles.balaoImagem} />
            <div style={styles.balaoTexto}>Lembre-se de verificar na caixa de Spam!</div>
        </div>

        <img src={astronautaImg} alt="astronauta" style={styles.astronauta} />
        
    </div>
    );
};

export default VerificarCodigo;