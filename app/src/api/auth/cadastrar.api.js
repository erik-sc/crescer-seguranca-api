import { axiosInstance } from "../base/axios-instance.api";
import { USUARIOS_URL } from "../../constants/api.constants";

export async function cadastrar({ nome, email, telefone, senha, permissoes }) {
    const response = await axiosInstance.post(
        USUARIOS_URL,
        {
            nome,
            email,
            telefone,
            senha,
            permissoes
        }
    )
    return response.data
}