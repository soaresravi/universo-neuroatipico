import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import neuroIcon from '../assets/neurodiversidade.png';

const ConhecendoNeurodivergencia = () => {

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
            <p><span style={styles.destaqueAmarelo}>O Transtorno do Espectro Autista (TEA)</span> é uma condição do desenvolvimento que faz com que a pessoa perceba, sinta e interaja com o mundo de forma diferente. O autismo <span style={styles.destaqueAmarelo}>não é uma doença</span>, mas sim uma característica da pessoa. Cada pessoa autista é única, podendo ter facilidades em algumas áreas e dificuldades em outras, principalmente na comunicação, interação social e comportamento.</p>
            <p><span style={styles.destaqueVermelho}><br></br><br></br>Nível 1 de suporte:</span> Precisa de menos apoio. Pode ter dificuldade em interações sociais, mas consegue fazer muitas atividades sozinha.</p>
            <p><span style={styles.destaqueVermelho}><br></br>Nível 2 de suporte:</span> Precisa de apoio maior. Tem mais dificuldade para se comunicar e interagir com outras pessoas.</p>
            <p><span style={styles.destaqueVermelho}><br></br>Nível 3 de suporte:</span> Precisa de muito apoio. Tem grandes dificuldades na comunicação e nas atividades do dia a dia.</p>
          </>
        );

      case 'TDAH':
        
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>O Transtorno do Déficit de Atenção com Hiperatividade (TDAH)</span> é um transtorno neurobiológico, de causas genéticas, caracterizado por desatenção, inquietação e impulsividade, surgindo na infância e frequentemente persistindo na vida adulta.</p>
          </>
        );

      case 'Dislexia':
       
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>Dislexia</span> é um transtorno de aprendizagem caracterizado por dificuldades na leitura, escrita e compreensão. A criança com dislexia pode trocar letras, ler mais devagar ou ter dificuldade para entender o que está escrito. Isso <span style={styles.destaqueAmarelo}>não quer dizer que ela é menos inteligente ou menos capaz</span>.</p>
          </>
        );

      case 'Discalculia':
       
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>Discalculia</span> é um transtorno de aprendizagem que causa dificuldade para aprender matemática. A criança pode ter dificuldade para entender números, fazer contas, lembrar tabuada ou saber qual o horário. Isso acontece porque o cérebro processa os números de forma diferente. Uma criança com discalculia <span style={styles.destaqueAmarelo}>pode ser muito inteligente em outras coisas</span>, como desenhar, contar histórias ou resolver problemas que não envolvam os números.</p>
          </>
        );
        
      case 'Disgrafia':
       
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>A Disgrafia</span> é um transtorno específico de aprendizagem que afeta a capacidade de escrita, resultando em caligrafia ilegível, desorganizada e traços incorretos, apesar da pessoa ter inteligência normal. A disgrafia está geralmente ligada a dificuldades motoras finas ou de processamento, manifesta-se por letras trêmulas, espaçamento irregular e esforço excessivo ao escrever.</p>
          </>
        );

      case 'Dispraxia':
       
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>A Dispraxia</span> é um transtorno neurológico que dificulta o planejamento e a execução dos movimentos. A pessoa sabe o que quer fazer, mas tem dificuldade para realizar de forma coordenada. Isso pode afetar tanto a coordenação motora fina, como escrever e recortar, quanto a grossa, como correr e pular. A dispraxia faz com que a criança pareça mais lenta ou desajeitada. Também pode influenciar a fala, a organização e a atenção. A dispraxia <span style={styles.destaqueAmarelo}>não está relacionada à inteligência</span> e, com o acompanhamento de profissionais como fonoaudiólogo e terapeuta ocupacional, a criança <span style={styles.destaqueAmarelo}>pode se desenvolver e melhorar suas habilidades</span>.</p>
          </>
        );

      case 'AH/SD':
        
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>As Super Habilidades, ou Superdotação (AH/SD)</span>, é quando a pessoa tem habilidades acima da média em uma ou mais áreas, como inteligência, criatividade, artes, liderança ou esportes. Essas pessoas aprendem com mais facilidade, são muito curiosas e podem ter grande interesse por determinados assuntos. Assim como qualquer pessoa, também precisam de apoio para desenvolver melhor seus talentos e lidar com desafios.</p>
          </>
        );

      case 'Tourette':
        
        return (
          <>
            <p><span style={styles.destaqueAmarelo}>A Síndrome de Tourette</span> é um transtorno neurológico que surge na infância e se caracteriza por tiques involuntários, que podem ser movimentos (como piscar os olhos ou mexer a cabeça) ou sons (como tossir ou fazer ruídos). Esses tiques não são controlados pela pessoa e podem aumentar em momentos de ansiedade ou estresse.</p>
            <p><br></br>Apesar de não ter cura, a Tourette pode ser tratada com acompanhamento médico e apoio psicológico. Com compreensão da família e da escola, a pessoa pode levar uma vida normal, estudar, praticar atividades e se desenvolver bem socialmente.</p>
          </>
        );

      default:
        return <p>Selecione uma neurodivergência para aprender mais.</p>;
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
      fontSize: '25px',
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
    },

    destaqueAmarelo: {
      color: '#FCFF5B',
    },

    destaqueVermelho: {
      color: '#FF4548',
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
      Conhecendo minha neurodivergência
    </div>

    <div style={styles.textoContainer}>
      {getConteudo()}
    </div>

  </div>
  );
};

export default ConhecendoNeurodivergencia;