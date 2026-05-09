import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import teaImg from '../assets/autismo.png';
import neuroIcon from '../assets/neurodiversidade.png';
import dislexiaImg from '../assets/dislexia.png';
import discalculiaImg from '../assets/discalculia.png';
import disgrafiaImg from '../assets/disgrafia.png';
import dispraxiaImg from '../assets/dispraxia.png';
import superdotacaoImg from '../assets/superdotacao.png';
import touretteImg from '../assets/tourette.png';

const Home = () => {

    const navigate = useNavigate();
    const { user } = useAuth();

    const nome = user?.user_metaData?.nome || user?.email?.split('@')[0] || 'Usuário';

    const trilhas = [
        { id: 'tea', nome: 'TEA', nomeCompleto: 'Transtorno do Espectro Autista (TEA)', imagem: teaImg },
        { id: 'tdah', nome: 'TDAH', nomeCompleto: 'Transtorno de Déficit de Atenção e Hiperatividade (TDAH)', imagem: neuroIcon },
        { id: 'dislexia', nome: 'Dislexia', nomeCompleto: 'Dislexia', imagem: dislexiaImg },
        { id: 'discalculia', nome: 'Discalculia', nomeCompleto: 'Discalculia', imagem: discalculiaImg },
        { id: 'disgrafia', nome: 'Disgrafia', nomeCompleto: 'Disgrafia', imagem: disgrafiaImg },
        { id: 'dispraxia', nome: 'Dispraxia', nomeCompleto: 'Dispraxia', imagem: dispraxiaImg },
        { id: 'ahsd', nome: 'AH/SD', nomeCompleto: 'Altas Habilidades/Superdotação (AH/SD)', imagem: superdotacaoImg },
        { id: 'tourette', nome: 'Tourette', nomeCompleto: 'Síndrome de Tourette', imagem: touretteImg }
    ];

    const styles = {
       
        container: {
            backgroundColor: '#1B3C83',
            minHeight: '100vh',
            padding: '20px'
        },
        
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
        },
        
        tituloContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        
        titulo: {
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '25px',
            color: 'white',
            letterSpacing: '3%',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        
        iconTitulo: {
            width: '40px',
            height: '40px',
            objectFit: 'contain'
        },
        
        saudacao: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '35px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '40px'
        },
        
        nome: {
            color: '#FF4548',
            marginBottom: '10px'
        },
        
        subtitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '25px',
            color: '#11FF00',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '2%',
            marginBottom: '30px'
        },
        
        gridTrilhas: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '20px',
            marginTop: '10px'
        },
        
        cardTrilha: {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            padding: '10px 10px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginBottom: '8px'
        },
        
        cardTrilhaIcon: {
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            display: 'block',
        },
        
        cardTrilhaNome: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '16px',
            color: 'white',
            textAlign: 'center',
            wordBreak: 'break-word'
        }

    };

    const handleTrilhaClick = (trilha) => {
        
        navigate(`/trilha/${trilha.id}`, {
            
            state: {
                trilhaNome: trilha.nome,
                trilhaNomeCompleto: trilha.nomeCompleto
            }

        });

    };

    return (
    
    <div style={styles.container}>
            
        <div style={styles.header}>
                
            <div style={styles.tituloContainer}>
                <h1 style={styles.titulo}>Universo Neuroatípico</h1>
                <img src={neuroIcon} alt="neuro" style={styles.iconTitulo} />
            </div>
            
        </div>
            
        <div style={styles.saudacao}>
            Olá, <span style={styles.nome}> {nome}!</span> <br /> Seja bem vindo!!
        </div>
            
        <div style={styles.subtitulo}>Escolha sua trilha</div>
            
        <div style={styles.gridTrilhas}>
            
            {trilhas.map((trilha) => (
            
                <div key={trilha.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleTrilhaClick(trilha)}>
                    
                    <div style={styles.cardTrilha}>
                        <img src={trilha.imagem} alt={trilha.nome} style={styles.cardTrilhaIcon} />
                    </div>
                    
                    <div style={styles.cardTrilhaNome}>{trilha.nomeCompleto}</div>   
                    
                </div>

            ))}
            
        </div>
    </div>
    );
};

export default Home;