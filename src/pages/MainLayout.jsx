import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import teaImg from '../assets/tea.png';
import livroIcon from '../assets/livro.png';
import dadosIcon from '../assets/dados.png';
import configIcon from '../assets/config.png';

const MainLayout = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { id: 'home', nome: 'Tela inicial', icon: teaImg, rota: '/home' },
        { id: 'conhecendo-neurodivergencia', nome: 'Conhecendo minha neurodivergência', icon: livroIcon, rota: '/conhecendo-neurodivergencia' },
        { id: 'atividades', nome: 'Atividades', icon: dadosIcon, rota: '/atividades' },
        { id: 'configuracoes', nome: 'Configurações', icon: configIcon, rota: '/configuracoes' }
    ];

    const styles = {
        
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#1B3C83',
        },
        
        content: {
            flex: 1,
            paddingBottom: '80px'
        },

        footer: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#1B3C83',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '12px 20px',
            zIndex: 100
        },

        footerTopLine: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: 101
        },

        tabsContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '12px 20px 20px 20px',
            backgroundColor: 'transparent'
        },
        
        tabItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            gap: '4px',
            marginBottom: '5px',
            marginTop: '5px'
        },
        
        tabItemActive: {
            opacity: 1,
            transform: 'scale(1.05)'
        },
        
        tabIcon: {
            width: '32px',
            height: '32px',
            objectFit: 'contain'
        },  

    };

    return (
    
    <div style={styles.container}>
        
        <div style={styles.content}>
            <Outlet />
        </div>
        
        <div style={styles.footer}>
        
            <div style={styles.footerTopLine} />
            
            {tabs.map((tab) => {
                
                const isActive = location.pathname === tab.rota;
                
                return (
                
                <div key={tab.id} style={{ ...styles.tabItem, ...(isActive ? styles.tabItemActive : {}) }} onClick={() => navigate(tab.rota)}>
                    <img src={tab.icon} alt={tab.nome} style={styles.tabIcon} />
                </div>
                
                );

            })}

        </div>
        
    </div>
    );
};

export default MainLayout;