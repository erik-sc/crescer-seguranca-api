import { axiosInstance } from "../base/axios-instance.api";
import { USUARIOS_URL } from "../../constants/api.constants";

export async function cadastrar({ nomeCompleto, apelido, dataNascimento, email, senha, imagemPerfil }) {
    const response = await axiosInstance.post(
        USUARIOS_URL,
        {
            nomeCompleto,
            apelido,
            dataNascimento,
            email,
            senha,
            imagemPerfil
        }
    )
    return response.data
}