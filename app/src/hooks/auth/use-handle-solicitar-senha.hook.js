import { solicitar } from "../../api/auth/solicitar-senha.api";
import { useState } from "react";

const DEFAULT_INPUT_STATE = { email: '' };
const INPUT_ERROR = '* Erro';

export function useHandleSolicitarSenha() {
    const [input, setInput] = useState(DEFAULT_INPUT_STATE);
    const [inputError, setError] = useState('');
    const [resposta, setResposta ] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        await solicitar({
            email: input.email
        });
        setResposta("Email enviado") 
    }

    async function handleChange(event) {
        const { name, value } = event.target;
        setInput((oldInput) => ({ ...oldInput, [name]: value }));
    }

    return {handleSubmit, handleChange, input, inputError, resposta}
}