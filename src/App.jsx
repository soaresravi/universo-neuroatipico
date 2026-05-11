import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { supabase, AuthProvider } from './contexts/AuthContext';

import MainLayout from './pages/MainLayout';
import Apresentacao from './pages/Apresentacao';
import Login from './pages/Login';
import EsqueciSenha from './pages/EsqueciSenha';
import VerificarCodigo from './pages/VerificarCodigo';
import NovaSenha from './pages/NovaSenha';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import ConhecendoNeurodivergencia from './pages/ConhecendoNeurodivergencia';
import SelecionarNeurodivergencia from './pages/SelecionarNeurodivergencia';
import Atividades from './pages/Atividades';
import Dicas from './pages/Dicas';
import JogosManuais from './pages/JogosManuais';
import JogosDigitais from './pages/JogosDigitais';
import Configuracoes from './pages/Configuracoes';

const AppRoutes = () => {

  const [rotaInicial, setRotaInicial] = useState(null);
  const [checarLogin, setChecarLogin] = useState(true);

  const checarUltimoLogin = async (userId) => {

    try {

      const { data, error } = await supabase.from('usuarios').select('ultimo_login').eq('id', userId).single();

      if (error) {
        console.error('Erro ao buscar último login:', error);
        return false;
      }

      if (data && data.ultimo_login) {
        const tempoUltimoLogin = new Date(data.ultimo_login).getTime();
        const currentTime = new Date().getTime();
        const semanaMilisegundos = 7 * 24 * 60 * 60 * 1000;
        return currentTime - tempoUltimoLogin <= semanaMilisegundos;
      }

      return false;

    } catch (error) {
      console.error('Erro ao verificar último login:', error);
      return false;
    }

  };

  const checarAutenticacao = async () => {

    try {

      const primeiroAcesso = localStorage.getItem('firstAccess');

      if (primeiroAcesso === null) {
        localStorage.setItem('firstAcess', 'false');
        setRotaInicial('apresentacao');
        setChecarLogin(false);
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setRotaInicial('login');
        setChecarLogin(false);
        return;
      }

      const loginValido = await checarUltimoLogin(session.user.id);

      if (loginValido) {
        setRotaInicial('home');
      } else {
        await supabase.auth.signOut();
        localStorage.removeItem('lastLogin');
        setRotaInicial('login');
      }

    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setRotaInicial('apresentacao');
    } finally {
      setChecarLogin(false);
    }

  };

  useEffect(() => {
    checarAutenticacao();
  }, []);

  if (checarLogin || rotaInicial === null) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>Carregando...</div>;
  }

  return <Navigate to={`/${rotaInicial}`} replace />;

};

function App() {
  
  return (

    <BrowserRouter>
      <AuthProvider>
        
        <Routes>
          
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/verificar-codigo" element={<VerificarCodigo />} />
          <Route path="/nova-senha" element={<NovaSenha />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/selecionar-neurodivergencia" element={<SelecionarNeurodivergencia /> } />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Route>

          <Route path="/trilha/:id" element={<Trilha />} />
          <Route path="/conhecendo-neurodivergencia" element={<ConhecendoNeurodivergencia />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/dicas" element={<Dicas /> } />
          <Route path="/jogos-manuais" element={<JogosManuais />} />
          <Route path="/jogos-digitais" element={<JogosDigitais /> } />
          
          <Route path="/" element={<Navigate to="/apresentacao" replace />} />
          
        </Routes>

      </AuthProvider>
    </BrowserRouter>

  );
};

export default App;
