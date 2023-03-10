import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-route.component";
import {
  LOGIN_PATH, 
  CADASTRO_PATH,
  HOME_PATH,
  SOLICITAR_SENHA_PATH,
  REDEFINIR_SENHA_PATH
} from "../constants/route.constants"
import {
  CadastroScreen,
  HomeScreen,
  LoginScreen,
  RedefinirSenha,
  SolicitarSenha
} from "../ui/screens"

export const router = createBrowserRouter([
  {
    path: LOGIN_PATH,
    element: <LoginScreen />
  },
  {
    path: CADASTRO_PATH,
    element: <CadastroScreen />
  },
  {
    path: HOME_PATH,
    element: <PrivateRoute Screen={HomeScreen}  />
  },
  {
    path: SOLICITAR_SENHA_PATH,
    element: <SolicitarSenha  />
  },
  {
    path: REDEFINIR_SENHA_PATH,
    element: <RedefinirSenha />
  }
]);
