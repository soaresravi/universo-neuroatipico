import emailjs from '@emailjs/browser';
import { supabase } from '../contexts/AuthContext';

const EMAIL_CONFIG = {
    PUBLIC_KEY: 'U5FcdPXoRBcc7SRAA',
    SERVICE_ID: 'service_avenurx',
    TEMPLATE_ID: 'template_pen5e75'
};

const gerarCodigo = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const solicitarRecuperacaoSenha = async (email, name = 'Usuário') => {

    try {

        const codigo = gerarCodigo();
        const expiracao = new Date(Date.now() + 15 * 60 * 1000);

        const { error: dbError } = await supabase.from('codigos_verificacao').insert({
            email: email,
            codigo: codigo,
            expiracao: expiracao.toISOString(),
            usado: false,
            tentativas: 0
        });

        if (dbError) throw dbError;

        const templateParams = {
            email: email,
            passcode: codigo,
            name: name,
            expiration_time: new Date(Date.now() + 15 * 60 * 1000).toLocaleString('pt-BR')
        };

        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAIL_CONFIG.PUBLIC_KEY
        );

        if (response.status === 200) {
            console.log('Código salvo e email enviado com sucesso!');
            return { success: true, error: null };
        } else {
            return { success: false, error: 'Erro ao enviar email' };
        }

    } catch (error) {
        console.error('Erro no processo de recuperação:', error);
        return { success: false, error: error.message };
    }

};

export const verificarCodigoRecuperacao = async (email, codigoDigitado) => {

    try {

        const { data, error } = await supabase.from('codigos_verificacao').select('*').eq('email', email).eq('codigo', codigoDigitado).eq('usado', false).gt('expiracao', new Date().toISOString()).single();

        if (error || !data) {
            return { valid: false, error: 'Código inválido ou expirado' };
        }

        await supabase.from('codigos_verificacao').update({ usado: true }).eq('id', data.id);

        return { valid: true, error: null };

    } catch (error) {
        return { valid: false, error: 'Erro ao verificar código' };
    }
};

export default emailjs;