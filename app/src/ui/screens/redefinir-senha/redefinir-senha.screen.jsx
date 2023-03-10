import { useParams } from "react-router-dom";
import { useHandleRedefinirSenha } from "../../../hooks/auth/use-handle-redefinir-senha.hook";

export function RedefinirSenha() {
    const { token } = useParams();
    const {handleSubmit, handleChange, input, resposta} = useHandleRedefinirSenha(token)

    return (
        <div className="login-container">
            <div className="login-screen">
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Senha nova:</label>
                    <input
                        type="password"
                        name="senha"
                        onChange={handleChange}
                        value={input.senha}
                        />
                    <label>Confirma senha nova:</label>
                    <input
                        type="password"
                        name="confirmaSenhaNova"
                        onChange={handleChange}
                        value={input.confirmaSenhaNova}
                        />
                    <button className="cadastro-button">Mudar senha</button>
                </form>
            </div>
        </div>
    )
}