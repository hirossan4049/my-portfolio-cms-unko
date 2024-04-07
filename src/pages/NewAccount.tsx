import { Button } from "@mui/material";
import InputText from "../components/InputText";
import { useCreateAccount } from "../hooks/useLogin";
import useValidationSchema from "../hooks/useValidationSchema";
import { NewAccountFormSchema } from "../schema/validationSchema";

const NewAccount = () => {
  const { register, handleSubmit, errors } = useValidationSchema(NewAccountFormSchema);
  const { handleCreateAccount, backLoginForm } = useCreateAccount()

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form onSubmit={handleSubmit(handleCreateAccount)} className="flex flex-col items-center justify-center w-1/2 h-1/2 p-3 border rounded-xl">
        <h1 className="text-3xl">マイポートフォリオ 管理者ログイン</h1>
        <InputText title={"メールアドレス"} id={"email"} register={register('email')} errors={errors} />
        <InputText title={"パスワード"} id={"newPassword"} register={register('newPassword')} errors={errors} />
        <InputText title={"パスワード確認"} id={"newPasswordConfirm"} register={register('newPasswordConfirm')} errors={errors} />
        <div className="flex flex-col gap-5">
          <Button type="submit" size="large" variant="contained" color="success" >ログイン</Button>
          <Button type="button" onClick={backLoginForm} size="large" variant="contained" color="success" >戻る</Button>
        </div>
      </form>
    </div>
  )
}

export default NewAccount