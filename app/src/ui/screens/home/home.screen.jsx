import "./home.style.css";
import { useHandleLogout } from "../../../hooks/auth/use-handle-logout.hook";
import { useGetUsuarios } from "../../../hooks/user/use-get-buscar-usuarios.hook";
import { useEffect } from "react";

export function HomeScreen() {
    const { usuarios, fetchUsuarios } = useGetUsuarios();
    const { handleLogout } = useHandleLogout();

    useEffect(() => {
        fetchUsuarios("", 0)
    }, [])
    return (
        <>
        <div className="generic-container">
            <section className="home-screen__column">
                <button className="logout-button" onClick={handleLogout}>
                    logout
                </button>
            </section>
            {usuarios?.map(usuario => <div><p>{usuario.nomeCompleto}{usuario.email}</p></div>)}
            <section className="home-screen__center-content">
            </section>
        </div>
        </>
    );
}
