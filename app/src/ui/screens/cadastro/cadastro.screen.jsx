import { useHandleCadastro } from "../../../hooks/auth/use-handle-register"

export function CadastroScreen() {
    const {handleSubmit, handleChange, registerInput, inputError } = useHandleCadastro()

    return (
        <div className="login-container">
        <div className="login-screen">
            <form onSubmit={handleSubmit} className="login-form">
                <label>Nome:</label>
                <input
                    placeholder="Joao silva"
                    type="text"
                    name="nome"
                    onChange={handleChange}
                    value={registerInput.nome}
                    />
                <label>Email:</label>
                <input
                    placeholder="exemplo@mail.com"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={registerInput.email}
                    />
                <label>Telefone:</label>
                <input
                    placeholder="exemplo@mail.com"
                    type="tel"
                    name="telefone"
                    onChange={handleChange}
                    value={registerInput.telefone}
                    />
                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    onChange={handleChange}
                    value={registerInput.senha}
                    />
                {inputError ? <p className="cadastro-error">{inputError}</p>:null}
                <button className="cadastro-button">cadastrar</button>
            </form>
        </div>
    </div>
    )
}