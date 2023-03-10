import { axiosInstance } from "../base/axios-instance.api";
import { REDEFINIR_SENHA_URL } from "../../constants/api.constants";

export async function solicitar({email}) {
    const response = await axiosInstance.post(REDEFINIR_SENHA_URL, {
        email
    })

    return response.data
}