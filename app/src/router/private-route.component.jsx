import { Navigate } from 'react-router-dom';
import useGlobalUser from '../context/user/user.context';
import { LOGIN_PATH } from '../constants/route.constants';

export function PrivateRoute({ Screen }) {
    const [user] = useGlobalUser();
    if(user) {
        return <Screen/>
    }

    return <Navigate to={LOGIN_PATH}/> 
}
