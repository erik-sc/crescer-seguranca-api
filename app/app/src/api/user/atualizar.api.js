import { axiosInstance } from "../base/axios-instance.api";
import { USUARIOS_URL } from "../../constants/api.constants";

export async function atualizar({nomeCompleto, apelido, dataNascimento, email, imagemPerfil}) {
    const response = await axiosInstance.put(
        `${USUARIOS_URL}`,
        {
            nomeCompleto,
            apelido,
            dataNascimento,
            email,
            imagemPerfil
        },
    )
    return response.data
}