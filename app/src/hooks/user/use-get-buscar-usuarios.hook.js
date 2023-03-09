import { useState } from "react"
import { listar } from "../../api/user/listar.api"

export function useGetUsuarios() {
    const [usuarios, setUsuarios] = useState();
    const [error, setError] = useState();
    const [carregando, setCarregando] = useState(true);

    async function fetchUsuarios(filtro, paginaNum) {
        try {
            const response = await listar({ filtro, paginaNum })
            setUsuarios(response.content);
        } catch (error) {
            setError(error)
        } finally {
            setCarregando(false);
        }
    }

    return { usuarios, fetchUsuarios, carregando }
}