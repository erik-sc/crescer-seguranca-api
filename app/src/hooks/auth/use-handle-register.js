import { cadastrar } from "../../api/auth/cadastrar.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../constants/route.constants";
const DEFAULT_REGISTER_STATE = { nome: '', email: '' , telefone: '', senha: '', permissoes: ['USER']};
const INPUT_ERROR = '* Há campos vazios';

export function useHandleCadastro() {
    const [registerInput, setRegisterInput] = useState(DEFAULT_REGISTER_STATE);
    const [inputError, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const {nome, email, telefone, senha, permissoes} = registerInput
        try {
            await cadastrar({
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
                permissoes: permissoes
            });
            navigate(LOGIN_PATH)
        } catch (error) {
            setError(INPUT_ERROR);
        } 
    }

    async function handleChange(event) {
        const { name, value } = event.target;
        setRegisterInput((oldInput) => ({ ...oldInput, [name]: value }));
    }

    return {handleSubmit, handleChange, registerInput, inputError}
}