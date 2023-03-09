import { axiosInstance } from "../base/axios-instance.api";
import { LOGIN_URL } from "../../constants/api.constants";

export async function login({ username, password }) {
    const response = await axiosInstance.post(
        LOGIN_URL,
        {},
        {
            auth: {
                username,
                password
            }
        }
    )
    return response.data
}