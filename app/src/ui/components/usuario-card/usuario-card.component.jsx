import "./usuario-card.style.css";
import { useSolicitar } from "../../../hooks/amizade/use-solicitar.hook"
import { UsuarioLink } from "../usuario-link/usuario-link.component";

export function UsuarioCard({ usuario, isPlaceholder, isAmigo }) {
    const { enviarSolicitacao } = useSolicitar();
    
    function renderPlaceholder() {
        return <p>Nada por aqui :/</p>;
    }

    function renderAmigoCard() {
        const { nomeCompleto } = usuario;
        return <UsuarioLink id={usuario.id} nomeUsuario={usuario.nomeCompleto}/>;
    }

    async function handleAdicionar() {
        await enviarSolicitacao(usuario.id)
    }
    
    function renderCard() {
        
        const { id, nomeCompleto } = usuario;
        return (
            <>
                <UsuarioLink id={id} nomeUsuario={nomeCompleto}/>
                <button className="usuario-card-botao__adicionar" onClick={handleAdicionar}>+</button>
            </>
        );

    }
    return (
        <div className="usuario-card__container">
            {isPlaceholder ? renderPlaceholder() : 
            (isAmigo ? renderAmigoCard() : renderCard())}
        </div>
    );
}

UsuarioCard.defaultProps = {
    isPlaceholder: false,
    isAmigo: false
}
