import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import neuroIcon from '../assets/neurodiversidade.png';

const Dicas = () => {

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
                    <p>• Criar rotina organizada<br /><br /></p>
                    <p>• Prezar por instruções claras e curtas<br /><br /></p>
                    <p>• Dividir tarefas em partes menores<br /><br /></p>
                    <p>• Evitar distrações no ambiente<br /><br /></p>
                    <p>• Fazer atividades dinâmicas<br /><br /></p>
                    <p>• Valorizar os seus esforços<br /><br /></p>
                  </>
                );
        
            case 'TDAH':
                
                return (
                    <>
                        <p>• Utilize quadros de rotina com figuras, horários fixos para dormir, acordar, estudar e brincar<br /><br /></p>
                        <p>• Peça por ordens curtas, uma de cada vez, repetindo o que foi pedido<br /><br /></p>
                        <p>• Tenha um local de estudos tranquilo, sem distrações, sem TV ou celular por perto<br /><br /></p>
                        <p>• Realize pequenas pausas durante tarefas longas<br /><br /></p>
                    </>
                );
        
            case 'Dislexia':
                
                return (
                    <>
                        <p>• Leia com calma: não precisa ter pressa. Leia no seu tempo<br /><br /></p>
                        <p>• Leia em voz alta: ler em voz alta ajuda a entender melhor as palavras<br /><br /></p>
                        <p>• Pratique um pouquinho todo dia: ajuda a evoluir um pouco a cada dia<br /><br /></p>
                        <p>• Leia livros com letras maiores e mais espaçadas, pois ajuda a entender melhor o que está escrito<br /><br /></p>
                        <p>• Peça ajuda quando precisar. Não tem problema pedir ajuda de vez em quando, você ainda está aprendendo<br /><br /></p>
                    </>
                );
        
            case 'Discalculia':
                
                return (
                    <>
                        <p>• Aprenda no seu ritmo: não precisa ter pressa para entender os números<br /><br /></p>
                        <p>• Use jogos: brincar com jogos de contar ajuda<br /><br /></p>
                        <p>• Use os dedos ou objetos: contar com apoio de algo facilita<br /><br /></p>
                        <p>• Desenhe a quantidade: fazer bolinhas ou risco ajuda a fazer contas como de adição (+) e subtração (-)<br /><br /></p>
                        <p>• Treine um pouquinho todos os dias: ajuda a evoluir um pouco a cada dia<br /><br /></p>
                        <p>• Peça ajuda quando precisar. Não tem problema pedir ajuda de vez em quando, você ainda está aprendendo<br /><br /></p>
                    </>
                );
                
            case 'Disgrafia':
              
                return (
                    <>
                        <p>• Treine caligrafia: a reaprendizagem das letras e o trabalho com espaçamento adequado favorecem o desenvolvimento da escrita<br /><br /></p>
                        <p>• Correção na forma de escrever: peça orientação na forma correta de segurar o lápis e ajustar a posição do papel, pois evita dores e cansaço nas mãos<br /><br /></p>
                        <p>• Uso de pincel ou instrumentos maiores: se tiver dificuldade para usar um lápis, o pincel ou marcadores grossos ajudam a criança a regular a pressão exercida no papel<br /><br /></p>
                    </>
                );
        
            case 'Dispraxia':
                
                return (
                    <>
                        <p>• Repetir atividades: amarrar o cadarço, usar tesoura, escrever<br /><br /></p>
                        <p>• Dividir tarefas em passos pequenos<br /><br /></p>
                        <p>• Usar lápis mais grossos ou adaptados<br /><br /></p>
                        <p>• Dar mais tempo para tarefas<br /><br /></p>
                    </>
                );
        
            case 'AH/SD':
                
                return (
                    <>
                        <p>• Faça coisas que estimulem a sua curiosidade e o aprendizado<br /><br /></p>
                        <p>• Faça desafios adequados<br /><br /></p>
                        <p>• Respeitar o seu ritmo<br /><br /></p>
                        <p>• Evite pressão excessiva vinda de outras pessoas<br /><br /></p>
                        <p>• Valorize os seus talentos<br /><br /></p>
                    </>
                );
        
            case 'Tourette':
                
                return (
                    <>
                        <p>• Ter paciência e evitar chamar atenção para os tiques<br /><br /></p>
                        <p>• Manter uma rotina organizada<br /><br /></p>
                        <p>• Reduzir o estresse e a ansiedade<br /><br /></p>
                        <p>• Buscar apoio da família, escola e profissionais<br /><br /></p>
                        <p>• Explicar para colegas e amigos, para evitar preconceito<br /><br /></p>
                    </>
                );
        
            default:
                return <p>Selecione uma neurodivergência para ver as dicas.</p>;
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
            fontSize: '21px',
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
            marginBottom: '30px',
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
            Dicas
        </div>
  
        <div style={styles.textoContainer}>
            {getConteudo()}
        </div>

    </div>
    );
};

export default Dicas;