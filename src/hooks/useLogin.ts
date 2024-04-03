import useCookiesHooks from "../hooks/useCookiesHooks"
import { checkAuth } from "../api/useApi"
import { FormEvent } from "react"

const useLogin = () => {
  const { logIn } = useCookiesHooks()
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const form = new FormData(e.currentTarget);
      const loginId = form.get("loginID") as string;
      const password = form.get("password") as string;
      const result = await checkAuth({ loginId, password })
      logIn(result.uid)
    } catch (error) {
      console.error(error)
    }
  }
  return { handleLogin }
}

export default useLogin;