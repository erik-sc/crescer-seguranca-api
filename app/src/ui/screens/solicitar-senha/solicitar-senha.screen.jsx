import { useHandleSolicitarSenha } from "../../../hooks/auth/use-handle-solicitar-senha.hook";



export function SolicitarSenha() {
    const {handleSubmit, handleChange, input, resposta} = useHandleSolicitarSenha()

    return (
        <div className="login-container">
            <div className="login-screen">
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Email da conta:</label>
                    <input
                        placeholder="exemplo@mail.com"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={input.email}
                        />
                    <button className="cadastro-button">Enviar email</button>
                </form>
            </div>
        </div>
    )
}