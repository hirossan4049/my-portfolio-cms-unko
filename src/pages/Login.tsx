import { Button } from "@mui/material"
import InputText from "../components/InputText"
import useLogin from "../hooks/useLogin"

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form onSubmit={(e) => handleLogin(e)} className="flex flex-col items-center justify-center w-1/2 h-1/2 p-3 border rounded-xl">
        <h1 className="text-3xl">マイポートフォリオ 管理者ログイン</h1>
        <InputText title={"ログインID"} id={"loginID"} />
        <InputText title={"パスワード"} id={"password"} />
        <Button type="submit" size="large" variant="contained" color="success" >ログイン</Button>
      </form>
    </div>
  )
}

export default Login