import { Button } from "@mui/material";
import InputText from "../components/InputText";
import { useLogin } from "../hooks/useLogin";
import useValidationSchema from "../hooks/useValidationSchema";
import { LoginFormSchema } from "../schema/validationSchema";

const Login = () => {
  const { handleLogin, handleGoCreateAccount } = useLogin();
  const { register, handleSubmit, errors } = useValidationSchema(LoginFormSchema);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form onSubmit={handleSubmit((e) => handleLogin(e))} className="flex flex-col items-center justify-center w-1/2 h-1/2 p-3 border rounded-xl">
        <h1 className="text-3xl">マイポートフォリオ 管理者ログイン</h1>
        <InputText title={"ログインID"} id={"loginId"} register={register('loginId')} errors={errors} />
        <InputText title={"パスワード"} id={"password"} register={register('password')} errors={errors} />
        <div className="flex flex-col gap-5">
          <Button type="submit" size="large" variant="contained" color="success" >ログイン</Button>
          <Button type="button" size="large" variant="contained" color="success" onClick={handleGoCreateAccount} >新規アカウント作成</Button>
        </div>
      </form>
    </div>
  )
}

export default Login