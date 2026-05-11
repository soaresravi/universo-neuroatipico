import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import neuroIcon from '../assets/neurodiversidade.png';

const JogosManuais = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { trilhaNome, trilhaNomeCompleto } = location.state || {
        trilhaNome: 'Selecione uma trilha',
        trilhaNomeCompleto: 'Selecione uma trilha'
    };

    const getConteudo = () => {

        switch (trilhaNome) {

            case 'TEA':
                
                return (
                    <>
                        <p>• Montar quebra-cabeças<br /><br /></p>
                        <p>• Sequência de imagens (organizar histórias em ordem)<br /><br /></p>
                        <p>• Brincar com blocos de montar<br /><br /></p>
                        <p>• Jogos de encaixe<br /><br /></p>
                        <p>• Brincar com LEGO separando por cores/tamanhos<br /><br /></p>
                        <p>• Jogar dominó<br /><br /></p>
                        <p>• Montar quebra-cabeça a partir de partes<br /><br /></p>
                    </>
                );
                
            case 'TDAH':
                
                return (
                    <>
                        <p>• Jogos rápidos (memória, cartas, dominó)<br /><br /></p>
                        <p>• Atividades com tempo (ex: desenhar uma casa e uma árvore em 5 minutos)<br /><br /></p>
                        <p>• Desenho livre<br /><br /></p>
                        <p>• Pular corda<br /><br /></p>
                        <p>• Jogue boliche! Você terá um movimento rápido e derrubará tudo<br /><br /></p>
                        <p>• Brinque com brinquedo Vai e Volta. Ele exige força, movimento e coordenação bilateral<br /><br /></p>
                        <p>• Jogue Pega Vareta: treine a paciência para esperar a vez e mover-se devagar<br /><br /></p>
                    </>
                );
            
            case 'Dislexia':
                
                return (
                    <>
                        <p>• Escreva palavras que você já conhece<br /><br /></p>
                        <p>• Leitura com imagens (livros ilustrados)<br /><br /></p>
                        <p>• Caça-palavras simples<br /><br /></p>
                        <p>• Jogo de memorização para treinar memória visual e retenção de símbolos<br /><br /></p>
                        <p>• Jogue dominó para aprender sequência numérica e lógica de associação<br /><br /></p>
                        <p>• Jogo Vai e Volta para trabalhar o movimento dos dois lados do corpo simultaneamente. Importante para a alfabetização<br /><br /></p>
                    </>
                );
                
            case 'Discalculia':
                
                return (
                    <>
                        <p>• Contar objetos do dia a dia (brinquedos ou frutas)<br /><br /></p>
                        <p>• Jogos de tabuleiro com números<br /><br /></p>
                        <p>• Uso de dinheiro fictício<br /><br /></p>
                        <p>• Sequências numéricas simples<br /><br /></p>
                    </>
                );
                
            case 'Disgrafia':
                
                return (
                    <>
                        <p>• Traçar linhas e formas (zigue-zague, curvas)<br /><br /></p>
                        <p>• Pintura e desenho<br /><br /></p>
                        <p>• Escrever letras com massinha<br /><br /></p>
                        <p>• Atividades de ligar pontos<br /><br /></p>
                    </>
                );
                
            case 'Dispraxia':
                
                return (
                    <>
                        <p>• Traçar linhas e formas (zigue-zague, curvas)<br /><br /></p>
                        <p>• Pintura e desenho<br /><br /></p>
                        <p>• Escrever letras com massinha<br /><br /></p>
                        <p>• Atividades de ligar pontos<br /><br /></p>
                    </>
                );
                
            case 'AH/SD':
                
                return (
                    <>
                        <p>• Desafios de lógica (enigmas, sudoku simples)<br /><br /></p>
                        <p>• Projetos criativos (inventar histórias, experiências)<br /><br /></p>
                        <p>• Jogos estratégicos (xadrez, quebra-cabeça complexo)<br /><br /></p>
                        <p>• Aprender algo novo sozinho (idioma, instrumento)<br /><br /></p>
                    </>
                );
                
            case 'Tourette':
                
                return (
                    <>
                        <p>• Desenho e pintura<br /><br /></p>
                        <p>• Jogos calmos (quebra-cabeça, leitura leve)<br /><br /></p>
                        <p>• Exercícios de respiração guiada<br /><br /></p>
                        <p>• Atividades com música<br /><br /></p>
                    </>
                );
                
            default:
                return <p>Selecione uma neurodivergência para ver os jogos manuais.</p>;
        }

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
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
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
      
        tituloConteudo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '35px',
            color: '#11FF00',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '30px'
        },
      
        textoContainer: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '20px',
            color: 'white',
            textAlign: 'justify',
            padding: '10px',
            letterSpacing: '3%'
        }

    };

    return (
    
    <div style={styles.container}>
        
        <div style={styles.header}>
            
            <button style={styles.botaoVoltar} onClick={() => navigate(-1)}> <ArrowLeft size={28} color="white" strokeWidth={2.5} /> </button>
            
            <div style={styles.tituloContainer}>
                <h1 style={styles.titulo}>Universo Neuroatípico</h1>
                <img src={neuroIcon} alt="neuro" style={styles.iconTitulo} />
            </div>
            
            <div style={{ width: '45px' }} />

        </div>
  
        <div style={styles.trilhaSelecionada}>
            Trilha selecionada: <span style={styles.trilhaNome}>{trilhaNome}</span>
        </div>
  
        <div style={styles.tituloConteudo}>
            Jogos manuais
        </div>
  
        <div style={styles.textoContainer}>
            {getConteudo()}
        </div>

    </div>
    );
};

export default JogosManuais;