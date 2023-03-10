import { redefinir } from "../../api/auth/redefinir-senha.api"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../constants/route.constants";

const DEFAULT_INPUT_STATE = { senha: '', confirmaSenhaNova: '' };
const INPUT_ERROR = '* Senhas desiguais ou token inválido';

export function useHandleRedefinirSenha(token) {
    const [input, setInput] = useState(DEFAULT_INPUT_STATE);
    const [inputError, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        await redefinir({
            token: token,
            senhaNova: input.senha,
            confirmaSenhaNova: input.confirmaSenhaNova
        });
        navigate(LOGIN_PATH)
    }

    async function handleChange(event) {
        const { name, value } = event.target;
        setInput((oldInput) => ({ ...oldInput, [name]: value }));
    }

    return {handleSubmit, handleChange, input, inputError}
}