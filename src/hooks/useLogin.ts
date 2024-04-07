import useCookiesHooks from "./useCookiesHooks";
import { LoginFormSchemaType } from "../schema/validationSchema";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const navigete = useNavigate()
  const { logIn } = useCookiesHooks()
  const handleLogin = async ({ loginId, password }: LoginFormSchemaType) => {
    //TODO ログイン認証処理追加
    try {
      console.log(loginId);
      console.log(password);
      logIn('sessionID')
      navigete('/top')
    } catch (error) {
      console.error(error)
    }
  }
  const handleGoCreateAccount = () => {
    navigete('/new_account')
  }
  return { handleLogin, handleGoCreateAccount }
};

export const useCreateAccount = () => {
  const navigete = useNavigate()
  const backLoginForm = () => {
    navigete('/login')
  }
  const handleCreateAccount = () => {
    //TODO アカウント作成処理追加
    try {
      navigete('/top')
    } catch (error) {
      console.error(error)
    }
  }
  return { backLoginForm, handleCreateAccount }
}