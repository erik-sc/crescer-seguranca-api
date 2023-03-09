import { useState } from "react";
import { logout } from "../../api/auth/logout.api";
import { HOME_PATH } from "../../constants/route.constants";
import { useHandleAuth } from "./use-handle-auth.hook";

export function useHandleLogout() {
    const { removeUser } = useHandleAuth(HOME_PATH);
    const [error, setError] = useState();
    async function handleLogout() {
        try {
            await logout();
            removeUser("username");
        } catch (error) {
            setError(error);
        }
    }

    return { handleLogout }
}