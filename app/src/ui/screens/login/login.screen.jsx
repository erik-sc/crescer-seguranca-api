import "./login.style.css"
import { useHandleLogin } from "../../../hooks/auth/use-handle-login.hook";

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
                </form>
            </div>
        </div>
    );
}
