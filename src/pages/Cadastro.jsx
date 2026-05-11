import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Undo2, AlertTriangle } from 'lucide-react';

import { supabase, useAuth } from '../contexts/AuthContext';
import fundoCadastro from '../assets/fundo-cadastro.jpeg';
import balaoImg from '../assets/balao.png';
import autismoImg from '../assets/autismo.png';
import neurodiversidadeImg from '../assets/neurodiversidade.png';
import dislexiaImg from '../assets/dislexia.png';
import discalculiaImg from '../assets/discalculia.png';
import disgrafiaImg from '../assets/disgrafia.png';
import dispraxiaImg from '../assets/dispraxia.png';
import superdotacaoImg from '../assets/superdotacao.png';
import touretteImg from '../assets/tourette.png';

const etapas = [
    { id: 'nome', pergunta: 'Como posso te chamar?', placeholder: 'Digite seu nome', tipo: 'text' },
    { id: 'idade', pergunta: 'Quantos anos você tem?', placeholder: 'Digite sua idade', tipo: 'number' },
    { id: 'email', pergunta: 'Digite o email do seu responsável', placeholder: 'exemplo@email.com', tipo: 'email', balao: 'Recomendamos que utilize o email do seu responsável!' },
    { id: 'senha', pergunta: 'Digite sua senha', placeholder: 'Crie uma senha', tipo: 'text', balao: 'Não se esqueça de anotar sua senha para não esquecer!', temConfirmacao: true },
    { id: 'neurodivergencias', pergunta: 'Selecionar neurodivergência(s)', tipo: 'multiselect' }
];

const neurodivergenciasLista = [
    { id: 'tea', nome: 'Transtorno do Espectro Autista (TEA)', imagem: autismoImg },
    { id: 'tdah', nome: 'Transtorno de Déficit de Atenção e Hiperatividade (TDAH)', imagem: neurodiversidadeImg },
    { id: 'dislexia', nome: 'Dislexia', imagem: dislexiaImg },
    { id: 'discalculia', nome: 'Discalculia', imagem: discalculiaImg },
    { id: 'disgrafia', nome: 'Disgrafia', imagem: disgrafiaImg },
    { id: 'dispraxia', nome: 'Dispraxia', imagem: dispraxiaImg },
    { id: 'ahsd', nome: 'Altas Habilidades/Superdotação (AH/SD)', imagem: superdotacaoImg },
    { id: 'tourette', nome: 'Síndrome de Tourette', imagem: touretteImg }
];

const Cadastro = () => {

    const navigate = useNavigate();
    const { login } = useAuth();
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [showExitModal, setShowExitModal] = useState(false);
    
    const [dados, setDados] = useState({
        nome: '',
        idade: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        neurodivergencias: []
    });

    const [carregando, setCarregando] = useState(false);
    const [erros, setErros] = useState({});

    const validarEtapa = () => {

        const etapa = etapas[etapaAtual];
        const novosErros = {};

        if (etapa.id === 'nome') {
            if (!dados.nome.trim()) novosErros.nome = 'Nome é obrigatório';
            else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(dados.nome)) novosErros.nome = 'Use apenas letras';
        }
      
        if (etapa.id === 'idade') {
            if (!dados.idade) novosErros.idade = 'Idade é obrigatória';
            else if (parseInt(dados.idade) < 5 || parseInt(dados.idade) > 120) novosErros.idade = 'Idade inválida';
        }
      
        if (etapa.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!dados.email) novosErros.email = 'Email é obrigatório';
            else if (!emailRegex.test(dados.email)) novosErros.email = 'Email inválido';
        }
      
        if (etapa.id === 'senha') {
            if (!dados.senha) novosErros.senha = 'Senha é obrigatória';
            else if (dados.senha.length < 6) novosErros.senha = 'Mínimo 6 caracteres';
            else if (dados.senha !== dados.confirmarSenha) novosErros.confirmarSenha = 'Senhas não conferem';
        }

        setErros(novosErros);
        return Object.keys(novosErros).length === 0;

    };

    const avancar = async () => {

        if (!validarEtapa()) return;

        if (etapaAtual < etapas.length - 1) {
            setEtapaAtual(etapaAtual + 1);
        } else {
            await finalizarCadastro();
        }

    };

    const voltar = () => {
        if (etapaAtual > 0) setEtapaAtual(etapaAtual - 1);
    };

    const finalizarCadastro = async () => {
        
        setCarregando(true);

        try {

            const { data: authData, error: authError } = await supabase.auth.signUp({
                
                email: dados.email,
                password: dados.senha,

                options: {
                   
                    data: {
                        nome: dados.nome,
                        idade: dados.idade,
                        neurodivergencias: dados.neurodivergencias
                    }

                }

            });

            if (authError) throw authError;

            if (authData.user) {

                const { error: dbError } = await supabase.from('usuarios').upsert({
                    id: authData.user.id,
                    email: dados.email,
                    nome: dados.nome,
                    idade: parseInt(dados.idade),
                    neurodivergencias: dados.neurodivergencias,
                    ultimo_login: new Date().toISOString()
                });

                if (dbError) console.error('Erro ao salvar na tabela:', dbError);

            }

            await login(dados.email, dados.senha);
            navigate('/home');

        } catch (error) {
            alert('Erro ao cadastrar: ' + error.message);
        } finally {
            setCarregando(false);
        }

    };

    const toggleNeurodivergencia = (id) => {
        setDados(prev => {
            const selecionadas = prev.neurodivergencias.includes(id) ? prev.neurodivergencias.filter(n => n !== id) : [...prev.neurodivergencias, id];
            return { ...prev, neurodivergencias: selecionadas };
        });
    };

    const handleConfirmExit = () => {
        setShowExitModal(false);
        navigate('/apresentacao');
    };

    const progresso = ((etapaAtual + 1) / etapas.length) * 100;
    const etapa = etapas[etapaAtual];

    const styles = {

        container: {
            backgroundImage: `url(${fundoCadastro})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        },
        
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            paddingTop: '20px',
            gap: '20px'
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
        },
        
        botaoSair: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            order: 2
        },
        
        progressoContainer: {
            flex: 1,
            height: '18px',
            backgroundColor: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            order: 1
        },
        
        progressoBarra: {
            height: '100%',
            backgroundColor: '#0051FF',
            width: `${progresso}%`,
            transition: 'width 0.3s ease',
            borderRadius: '20px',
        },
        
        content: {
            maxWidth: '500px',
            margin: '0 auto',
            flex: 1,
            paddingBottom: '120px',
            textAlign: 'left',
            width: '100%',
            marginTop: '40px'
        },
        
        pergunta: {
            fontFamily: "'Cal Sans', sans-serif",
            color: 'white',
            fontSize: 'clamp(24px, 6vw, 32px)',
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            letterSpacing: '1.5px',
        },
        
        input: {
            width: '100%',
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: 'white',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#0051FF',
            outline: 'none',
            boxSizing: 'border-box'
        },
        
        inputError: {
            border: '2px solid #ff6b6b'
        },
        
        errorText: {
            color: '#ff6b6b',
            fontSize: '12px',
            marginTop: '10px',
            marginLeft: '5px',
            fontFamily: "'Inter', sans-serif"
        },
        
        botoesContainer: {
            position: 'fixed',
            bottom: '30px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: etapaAtual === 0 ? 'flex-end' : 'space-between',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '500px',
            margin: '0 auto',
            zIndex: 100
        },
        
        botaoVoltar: {
            backgroundColor: 'transparent',
            border: 'none',
            width: '60px',
            height: '60px', 
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        },
        
        botaoProximo: {
            flex: etapaAtual === 0 ? 1 : 'none',
            width: etapaAtual === 0 ? '100%' : '90%',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '4px 30px',
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '30px',
            color: '#0051FF',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'opacity 0.3s, transform 0.2s ease',
            textAlign: 'center'
        },
        
        balao: {
            position: 'fixed',
            bottom: '230px',
            right: '40px',
            maxWidth: '220px',
            zIndex: 90
        },
        
        balaoImagem: {
            width: '100%',
            height: 'auto'
        },
        
        balaoTexto: {
            position: 'absolute',
            top: '37%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#0051FF',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            padding: '10px',
            width: '80%'
        },
        
        gridNeuro: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '15px',
            marginTop: '20px'
        },

        cardNeuro: {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            padding: '10px 10px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginBottom: '8px'
        },
        
        cardNeuroSelecionado: {
            backgroundColor: '#0051FF',
            border: '2px solid white',
            transform: 'scale(1.02)'
        },
        
        cardNeuroIcon: {
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            display: 'block',
        },

        cardNeuroNome: {
            fontFamily: "'Cal Sans', sans-serif",
            fontSize: '16px',
            color: 'white',
            textAlign: 'center',
            wordBreak: 'break-word'
        },
        
        inputContainer: {
            marginBottom: '20px'
        },
        
        labelSenha: {
            fontFamily: "'Cal Sans', sans-serif",
            color: 'white',
            fontSize: '20px',
            marginBottom: '10px',
            display: 'block'
        },

        botoesContainerCenter: {
            position: 'fixed',
            bottom: '30px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '500px',
            margin: '0 auto',
            zIndex: 100
        }

    };

    return (
    
    <div style={styles.container}>
       
        <div style={styles.header}>
            
            <div style={styles.progressoContainer}>
                <div style={styles.progressoBarra} />
            </div>

            <button style={styles.botaoSair} onClick={() => setShowExitModal(true)}> <X size={32} strokeWidth={3} color="white" /> </button>
        
        </div>

        <div style={styles.content}>
            
            <h2 style={styles.pergunta}>{etapa.pergunta}</h2>

            {etapa.id !== 'neurodivergencias' ? (
                
                <>
                    
                    <div style={styles.inputContainer}>
                        
                        <input type={etapa.tipo} style={{ ...styles.input, ...(erros[etapa.id] ? styles.inputError : {}) }} placeholder={etapa.placeholder} value={dados[etapa.id] || ''}
                        
                        onChange={(e) => {
                            
                            setDados({ ...dados, [etapa.id]: e.target.value });
                            
                            if (etapa.id === 'senha') {
                                setDados(prev => ({ ...prev, confirmarSenha: '' }));
                            }
                        }} />

                        {erros[etapa.id] && <div style={styles.errorText}>{erros[etapa.id]}</div>}

                    </div>

                    {etapa.id === 'senha' && (
                        
                        <div style={{ marginTop: '20px' }}>
                            
                            <label style={styles.labelSenha}>Confirmar senha</label>
                            
                            <div style={styles.inputContainer}>
                                <input type="text" style={{ ...styles.input, ...(erros.confirmarSenha ? styles.inputError : {}) }} placeholder="Confirme sua senha" value={dados.confirmarSenha || ''} onChange={(e) => setDados({ ...dados, confirmarSenha: e.target.value })} />
                                {erros.confirmarSenha && <div style={styles.errorText}>{erros.confirmarSenha}</div>}
                            </div>

                        </div>

                    )}

                </>
            ) : (
                
                <div style={styles.gridNeuro}>
                    
                    {neurodivergenciasLista.map((neuro) => (
                        
                        <div key={neuro.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            
                            <div style={{ ...styles.cardNeuro, ...(dados.neurodivergencias.includes(neuro.id) ? styles.cardNeuroSelecionado : {}) }} onClick={() => toggleNeurodivergencia(neuro.id)}>
                                <img src={neuro.imagem} alt={neuro.nome} style={styles.cardNeuroIcon} />
                            </div>
                            
                            <div style={styles.cardNeuroNome}>{neuro.nome}</div>
                        
                        </div>
                    
                    ))}
                
                </div>
            )}
        </div>

        {etapa.balao && (
            
            <div style={styles.balao}>
                <img src={balaoImg} alt="balao" style={styles.balaoImagem} />
                <div style={styles.balaoTexto}>{etapa.balao}</div>
            </div>

        )}

        <div style={etapaAtual === 0 ? styles.botoesContainerCenter : styles.botoesContainer}>
            
            {etapaAtual > 0 && (
                <button style={styles.botaoVoltar} onClick={voltar}> <Undo2 size={28} color="white" strokeWidth={2.5} /> </button>
            )}
            
            <button style={{...styles.botaoProximo, ...(etapaAtual === 0 && { width: '200px' })}} onClick={avancar} disabled={carregando}> {carregando ? '...' : etapaAtual === etapas.length - 1 ? 'Finalizar' : 'Próximo'} </button>
        
        </div>

        {showExitModal && (
        
            <div style={styles.overlay}>
                
                <div style={styles.modal}>
                    
                    <button style={styles.modalFechar} onClick={() => setShowExitModal(false)}> <X size={24} color="white" /> </button>
                    <div style={styles.modalTitulo}>Atenção!</div>
                    
                    <div style={styles.modalTexto}>
                        Tem certeza que deseja sair do cadastro?<br /> Os dados preenchidos serão perdidos.
                    </div>
                    
                    <div style={styles.modalBotoes}>
                        <button style={styles.modalBotaoCancelar} onClick={() => setShowExitModal(false)}> Cancelar </button>
                        <button style={styles.modalBotaoConfirmar} onClick={handleConfirmExit}> Sair </button>
                    </div>

                </div>

            </div>
            
        )}

    </div>
    );
};

export default Cadastro;