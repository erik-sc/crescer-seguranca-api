import { axiosInstance } from "../base/axios-instance.api";
import { LOGOUT_URL } from "../../constants/api.constants";

export async function logout() {
    const response = await axiosInstance.post(LOGOUT_URL)
    return response.data
}