import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import neuroIcon from '../assets/neurodiversidade.png';

import autisparkImg from '../assets/autispark.jpg';
import procuraPalavrasImg from '../assets/procura-palavras.jpeg';
import colorirAprenderImg from '../assets/colorir-aprender.jpeg';
import jogosInfantisImg from '../assets/jogos-infantis.jpeg';
import logicLikeImg from '../assets/logic-like.jpeg';
import abcKidsImg from '../assets/abc-kids.jpeg';
import colorirAprender2Img from '../assets/colorir-aprender-2.jpeg';
import speakOutImg from '../assets/speak-out.jpeg';

const JogosDigitais = () => {

    const navigate = useNavigate();

    const jogos = [

        {
            id: 1,
            titulo: '1. AutiSpark',
            imagem: autisparkImg,
            texto: 'O AutiSpark é um app educacional para crianças com TEA com jogos de aprendizagem concebidos e aprovados por especialistas. Oferece jogos de aprendizagem bem pesquisados, envolventes e interativos cuidadosamente projetados para atender aos requisitos de aprendizagem da criança. Inclui conceitos de associação de imagens, compreensão de emoções e etc.',
            destquesTexto: ['O AutiSpark', 'associação de imagens, compreensão de emoções'],
            link: 'https://play.google.com/store/apps/details?id=com.iz.autispark.kids.autism.games.special.needs.educational.learning.therapy.social.skills.speech'
        },

        {
            id: 2,
            titulo: '2. Procura Palavras',
            imagem: procuraPalavrasImg,
            texto: 'Procura Palavras é o jogo de palavras mais viciante e emocionante para treinar sua mente. Concentre-se para conectar as letras, formando as palavras ocultas e, assim, obter moedas e prêmios fabulosos. Você vai se divertir melhorando seu vocabulário e suas habilidades de ortografia!',
            destquesTexto: ['Procura Palavras', 'vocabulário', 'habilidades de ortografia'],
            link: 'https://play.google.com/store/apps/details?id=com.orange.word.puzzle.connect.crossword'
        },

        {
            id: 3,
            titulo: '3. Colorir e Aprender - Animais',
            imagem: colorirAprenderImg,
            texto: 'Divertido jogo para crianças de todas as idades. No Colorir e Aprender você tem atividades de colorir páginas, você pode adicionar lindos adesivos às suas criações, exercitar a sua memória com o clássico jogo de memória e resolver os belos quebra-cabeças de animais da fazenda, a selva, a floresta, o deserto e o mundo marinho. Além disso, você aprenderá o som de cada animal.',
            destquesTexto: ['Colorir e Aprender', 'colorir páginas', 'adicionar lindos adesivos', 'jogo de memória', 'quebra-cabeças', 'aprenderá o som de cada animal'],
            link: 'https://play.google.com/store/apps/details?id=com.orange.coloring.learn.kids.animals'
        },

        {
            id: 4,
            titulo: '4. Jogos infantis: 3-7 anos',
            imagem: jogosInfantisImg,
            texto: 'Os Jogos infantis: 3-7 anos são divertidos jogos educativos para crianças pequenas para ajudar a ensinar números, contagem, cores, formas, coordenação, habilidades motoras, memória e muito mais! Aprender é fácil e divertido com esta coleção de jogos grátis para crianças.',
            destquesTexto: ['Jogos infantis: 3-7 anos', 'ensinar números, contagem, cores, formas, coordenação, habilidades motoras'],
            link: 'https://play.google.com/store/apps/details?id=com.rvappstudios.baby.toddler.kids.games.learning.activity'
        },

        {
            id: 5,
            titulo: '5. LogicLike: Jogos educativos 2-8',
            imagem: logicLikeImg,
            texto: 'O LogicLike: Jogos educativos 2-8 são jogos educativos e cognitivos para crianças. Ele faz a preparação para a escola e educação pré-escolar, estimulando o raciocínio e a vontade de aprender. Possuem jogos infantis de lógica, memória e atenção.',
            destquesTexto: ['LogicLike: Jogos educativos 2-8', 'lógica, memória e atenção'],
            link: 'https://play.google.com/store/apps/details?id=com.logicappkids'
        },

        {
            id: 6,
            titulo: '6. ABC Alfabeto Jogo Para Criança',
            imagem: abcKidsImg,
            texto: 'O ABC Kids é um aplicativo de ensino de fonética e alfabeto que torna o aprendizado divertido para crianças. Ele apresenta uma série de jogos de traçado para ajudar as crianças a reconhecer as formas das letras, associá-las aos sons fônicos e colocar seu conhecimento do alfabeto em uso em divertidos exercícios de correspondência. Eles podem até coletar adesivos e brinquedos enquanto completam jogos de rastreamento!',
            destquesTexto: ['ABC Kids', 'reconhecer as formas das letras', 'sons fônicos', 'coletar adesivos', 'brinquedos', 'jogos de rastreamento'],
            link: 'https://play.google.com/store/apps/details?id=bibi.pet.games.abc'
        },

        {
            id: 7,
            titulo: '7. Colorir e Aprender',
            imagem: colorirAprender2Img,
            texto: 'O Colorir e Aprender é um jogo divertido que permite desenhar e colorir de forma real da mesma forma que você faria em um papel usando diferentes ferramentas. Mais de 250 páginas para colorir com conteúdo educativo! Você pode desenhar e colorir livremente e dar rédea solta à sua imaginação ou pode criar obras de arte mágicas com tinta neon!',
            destquesTexto: ['Colorir e Aprender', 'desenhar e colorir livremente', 'criar obras de arte mágicas com tinta neon'],
            link: 'https://play.google.com/store/apps/details?id=com.orange.coloring.learn.kids'
        },

        {
            id: 8,
            titulo: '8. Speak Out Kids: Fala e Leitura',
            imagem: speakOutImg,
            texto: 'O Speak Out Kids é uma plataforma de aprendizado completa, projetada para tornar o desenvolvimento da fala, alfabetização e até mesmo o aprendizado de um novo idioma uma aventura alegre para toda criança. O aplicativo é incrivelmente eficaz para todas as crianças, sejam bebês neurotípicos, pré-escolares ou crianças com necessidades de aprendizagem únicas.',
            destquesTexto: ['Speak Out Kids'],
            link: 'https://play.google.com/store/apps/details?id=com.speakout.mobile'
        }
    
    ];

    const renderTextoComDestaques = (texto, destaques) => {

        let partes = [texto];

        destaques.forEach(destaque => {
            
            const novasPartes = [];

            partes.forEach(parte => {

                if (typeof parte === 'string') {
                    const splitado = parte.split(new RegExp(`(${destaque})`, 'g'));
                    novasPartes.push(...splitado);
                } else {
                    novasPartes.push(parte);
                }

            });

            partes = novasPartes;

        });

        return partes.map((parte, index) => {
            
            if (typeof parte === 'string' && destaques.some(d => parte === d)) {
                return <span key={index} style={styles.destaqueAmarelo}>{parte}</span>;
            }

            return parte;

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
            justifyContent: 'space-between',
            marginBottom: '30px'
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
        
        tituloConteudo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '35px',
            color: '#11FF00',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '30px'
        },
      
        jogosContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
        },
      
        jogoTitulo: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '25px',
            color: '#FCFF5B',
            marginBottom: '15px'
        },
        
        jogoImagem: {
            width: '100%',
            maxWidth: '348px',
            height: '196px',
            objectFit: 'cover',
            borderRadius: '20px',
            marginBottom: '15px'
        },
      
        jogoTexto: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: 'white',
            textAlign: 'justify',
            lineHeight: '1.4',
            marginBottom: '10px'
        },
      
        destaqueAmarelo: {
            color: '#FCFF5B'
        },
      
        linkContainer: {
            marginTop: '20px'
        },
        
        linkLabel: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '18px',
            color: '#FF4548',
        },
        
        link: {
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: 'white',
            textDecoration: 'none',
            wordBreak: 'break-all'
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
            
            <div style={{ width: '45px', marginBottom: '20px' }} />

        </div>
  
        <div style={styles.tituloConteudo}>
            Jogos digitais
        </div>
  
        <div style={styles.jogosContainer}>
            
            {jogos.map((jogo) => (
            
                <div key={jogo.id} style={{ padding: '5px'}}>

                    <div style={styles.jogoTitulo}>{jogo.titulo}</div>
                    <img src={jogo.imagem} alt={jogo.titulo} style={styles.jogoImagem} />
                    
                    <div style={styles.jogoTexto}>
                        {renderTextoComDestaques(jogo.texto, jogo.destquesTexto)}
                    </div>
                    
                    <div style={styles.linkContainer}>
                        <span style={styles.linkLabel}>Link: </span>
                        <a href={jogo.link} target="_blank" rel="noopener noreferrer" style={styles.link}> {jogo.link} </a>
                    </div>

                </div>
            
            ))}
            
        </div>
    </div>
    );
};

export default JogosDigitais;