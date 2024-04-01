import { Button } from "@mui/material"
import InputText from "../components/InputText"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/")
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2 p-3 border rounded-xl">
        <h1 className="text-3xl">マイポートフォリオ 管理者ログイン</h1>
        <InputText title={"ログインID"} id={"loginID"} />
        <InputText title={"パスワード"} id={"password"} />
        <Button size="large" variant="contained" color="success" onClick={handleLogin} >ログイン</Button>
      </div>
    </div>
  )
}

export default Login