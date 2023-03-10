import "./login.style.css"
import { useHandleLogin } from "../../../hooks/auth/use-handle-login.hook";
import { Link } from "react-router-dom";
import { CADASTRO_PATH, SOLICITAR_SENHA_PATH } from "../../../constants/route.constants";

export function LoginScreen() {
    const { handleSubmit, handleChange, loginInput, inputError } =
        useHandleLogin();

    return (
        <div className="login-container">
            <div className="login-screen">
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Username:</label>
                    <input
                        placeholder="exemplo@email.com"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={loginInput.username}
                        />
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={loginInput.password}
                        />
                    {inputError ? <p className="login-error">{inputError}</p>:null}
                    <button className="login-button">logar</button>
                    <Link to={CADASTRO_PATH}>Cadastrar</Link>
                    <Link to={SOLICITAR_SENHA_PATH}>Esqueci minha senha</Link>
                </form>
            </div>
        </div>
    );
}
