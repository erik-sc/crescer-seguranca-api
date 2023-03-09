import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useGlobalUser from "../../context/user/user.context"
import { LOGIN_PATH } from "../../constants/route.constants";

export function useHandleAuth(path) {
    const [user, setUser] = useGlobalUser()
    const navigate = useNavigate()

    function removeUser(key) {
        setUser(null)
        localStorage.removeItem(key)
    }

    function checkAuth(key, error) {
        if (error.response.status === 401) {
            removeUser(key)
        }
    }

    useEffect(() => {
        if(user) {
            navigate(path)
            return
        }
        if(!user) {
            navigate(LOGIN_PATH)
            return
        }

    }, [user])

    function handleLogin(loggedUser) {
        setUser(loggedUser)
    }

    return { removeUser, checkAuth, handleLogin }
}