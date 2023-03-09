import { login } from "../../api/auth/login.api";
import { HOME_PATH } from "../../constants/route.constants";
import { useHandleAuth } from "./use-handle-auth.hook";
import { useState } from "react";

const DEFAULT_INPUT_STATE = { username: '', password: '' };
const INPUT_ERROR = '* Nome de usuário ou senha incorretos';

export function useHandleLogin() {
    const [loginInput, setLoginInput] = useState(DEFAULT_INPUT_STATE);
    const [inputError, setError] = useState('');
    const { handleLogin } = useHandleAuth(HOME_PATH);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const user = await login({
                username: loginInput.username,
                password: loginInput.password,
            });
            handleLogin(user);
        } catch (error) {
            setError(INPUT_ERROR);
        }
    }

    async function handleChange(event) {
        const { name, value } = event.target;
        setLoginInput((oldInput) => ({ ...oldInput, [name]: value }));
    }

    return {handleSubmit, handleChange, loginInput, inputError}
}