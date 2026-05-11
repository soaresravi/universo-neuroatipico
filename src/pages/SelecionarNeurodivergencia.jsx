import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import neuroIcon from '../assets/neurodiversidade.png';
import teaImg from '../assets/autismo.png';
import dislexiaImg from '../assets/dislexia.png';
import discalculiaImg from '../assets/discalculia.png';
import disgrafiaImg from '../assets/disgrafia.png';
import dispraxiaImg from '../assets/dispraxia.png';
import superdotacaoImg from '../assets/superdotacao.png';
import touretteImg from '../assets/tourette.png';

const SelecionarNeurodivergencia = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const origem = location.state?.origem || 'conhecendo-neurodivergencia';
    const redirectTo = origem === 'atividades' ? '/atividades' : '/conhecendo-neurodivergencia';

    const neurodivergencias = [
        { id: 'tea', nome: 'TEA', nomeCompleto: 'Transtorno do Espectro Autista (TEA)', imagem: teaImg },
        { id: 'tdah', nome: 'TDAH', nomeCompleto: 'Transtorno de Déficit de Atenção e Hiperatividade (TDAH)', imagem: neuroIcon },
        { id: 'dislexia', nome: 'Dislexia', nomeCompleto: 'Dislexia', imagem: dislexiaImg },
        { id: 'discalculia', nome: 'Discalculia', nomeCompleto: 'Discalculia', imagem: discalculiaImg },
        { id: 'disgrafia', nome: 'Disgrafia', nomeCompleto: 'Disgrafia', imagem: disgrafiaImg },
        { id: 'dispraxia', nome: 'Dispraxia', nomeCompleto: 'Dispraxia', imagem: dispraxiaImg },
        { id: 'ahsd', nome: 'AH/SD', nomeCompleto: 'Altas Habilidades/Superdotação (AH/SD)', imagem: superdotacaoImg },
        { id: 'tourette', nome: 'Tourette', nomeCompleto: 'Síndrome de Tourette', imagem: touretteImg }
    ];

    const handleSelecionar = (neuro) => {
        
        navigate(redirectTo, {
            
            state: {
                trilhaNome: neuro.nome,
                trilhaNomeCompleto: neuro.nomeCompleto
            }

        });

    };

    const styles = {
        
        container: {
            backgroundColor: '#1B3C83',
            minHeight: '100vh',
            padding: '20px'
        },
        
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px'
        },
        
        botaoVoltar: {
            backgroundColor: 'transparent',
            border: 'none',
            width: '38px',
            height: '38px',
            cursor: 'pointer'
        },
        
        tituloContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginLeft: '10px'
        },
        
        subtitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '22px',
            color: '#11FF00',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '30px',
            marginTop: '15px',
            letterSpacing: '3%',
        },
        
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '20px'
        },
        
        card: {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            padding: '20px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        
        cardIcon: {
            width: '120px',
            height: '120px',
            objectFit: 'contain'
        },
       
        cardNome: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '16px',
            color: 'white',
            textAlign: 'center',
            marginTop: '10px'
        }

    };

    return (
    
    <div style={styles.container}>
        
        <div style={styles.header}>
          
          <button style={styles.botaoVoltar} onClick={() => navigate('/home')}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
          
          <div style={styles.tituloContainer}>
            <div style={styles.subtitulo}> Selecione a neurodivergência </div>
          </div>

        </div>
  
        <div style={styles.grid}>
            
            {neurodivergencias.map((neuro) => (
            
                <div key={neuro.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleSelecionar(neuro)}>
                    
                    <div style={styles.card}>
                        <img src={neuro.imagem} alt={neuro.nome} style={styles.cardIcon} />
                    </div>
                    
                    <div style={styles.cardNome}>{neuro.nomeCompleto}</div>
                
                </div>
            ))}

        </div>

    </div>
    );
};

export default SelecionarNeurodivergencia;