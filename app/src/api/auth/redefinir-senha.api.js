import { axiosInstance } from "../base/axios-instance.api";
import { REDEFINIR_SENHA_URL } from "../../constants/api.constants";

export async function redefinir({token, senhaNova, confirmaSenhaNova}) {
    const response = await axiosInstance.put(REDEFINIR_SENHA_URL, {
        token,
        senhaNova,
        confirmaSenhaNova
    })

    return response.data
}