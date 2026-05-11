import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import neuroIcon from '../assets/neurodiversidade.png';
import atividadesIcon from '../assets/atividades.png';
import ideiaIcon from '../assets/ideia.png';
import estudarIcon from '../assets/estudar.png';

const Trilha = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { trilhaNome, trilhaNomeCompleto } = location.state || {
        trilhaNome: 'Trilha', 
        trilhaNomeCompleto: 'Trilha Selecionada' 
    };

    const opcoes = [
        { id: 'atividades', nome: 'Atividades', icon: atividadesIcon, rota: '/atividades' },
        { id: 'dicas', nome: 'Dicas', icon: ideiaIcon, rota: '/dicas' },
        { id: 'conhecendo-neurodivergencia', nome: 'Conhecendo minha neurodivergência', icon: estudarIcon, rota: '/conhecendo-neurodivergencia' }
    ];

    const styles = {
        
        container: {
            backgroundColor: '#1B3C83',
            minHeight: '100vh',
            padding: '20px'
        },
        
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
        },
        
        botaoVoltar: {
            backgroundColor: 'transparent',
            border: 'none',
            width: '45px',
            height: '45px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        },
      
        tituloContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        },
        
        titulo: {
            fontFamily: "'Atkinson Hyperlegible', sans-serif",
            fontSize: '19px',
            color: 'white',
            letterSpacing: '3%',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        
        iconTitulo: {
            width: '30px',
            height: '30px',
            objectFit: 'contain'
        },
        
        trilhaSelecionada: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '20px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '40px',
            marginLeft: '10px',
            marginTop: '-10px'
        },
        
        trilhaNome: {
            color: '#FF4548'
        },
        
        gridDoisColunas: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '30px'
        },
        
        card: {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            padding: '20px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        },
        
        cardIcon: {
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            display: 'block'
        },
        
        cardNome: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '25px',
            color: '#11FF00',
            textAlign: 'center',
            wordBreak: 'break-word',
            marginTop: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        
        centralizado: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        },
        
        cardCentralizado: {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            padding: '20px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

    };
    
    const handleOpcaoClick = (opcao) => {

        navigate(opcao.rota, {

            state: {
                trilhaNome: trilhaNome,
                trilhaNomeCompleto: trilhaNomeCompleto
            }

        });

    };

    return (

    <div style={styles.container}>
            
        <div style={styles.header}>
                
            <button style={styles.botaoVoltar} onClick={() => navigate('/home')}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
                
            <div style={styles.tituloContainer}>
                <h1 style={styles.titulo}>Universo Neuroatípico</h1>
                <img src={neuroIcon} alt="neuro" style={styles.iconTitulo} />
            </div>
                
            <div style={{ width: '45px' }} /> 

        </div>

        <div style={styles.trilhaSelecionada}>
            Trilha selecionada: <span style={styles.trilhaNome}>{trilhaNome}</span>
        </div>
        
        <div style={styles.gridDoisColunas}>
            
            {opcoes.slice(0, 2).map((opcao) => (
                
                <div key={opcao.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleOpcaoClick(opcao)}>
                    
                    <div style={styles.card}>
                        <img src={opcao.icon} alt={opcao.nome} style={styles.cardIcon} />
                    </div>
                    
                    <div style={styles.cardNome}>{opcao.nome}</div>
                    
                </div>
            
            ))}

        </div>
        
        <div style={styles.centralizado}>
           
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleOpcaoClick(opcoes[2])}>
                
                <div style={styles.cardCentralizado}>
                    <img src={opcoes[2].icon} alt={opcoes[2].nome} style={styles.cardIcon} />
                </div>
                
                <div style={styles.cardNome}>{opcoes[2].nome}</div>
            
            </div>

        </div>
        
    </div>
    );
};

export default Trilha;