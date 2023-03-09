import { axiosInstance } from "../base/axios-instance.api";
import { USUARIOS_URL } from "../../constants/api.constants";

export async function listar({filtro, paginaNum}) {
    const response = await axiosInstance.get(
        `${USUARIOS_URL}?filtro=${filtro}&page=${paginaNum}`,
        {},
    )
    return response.data
}