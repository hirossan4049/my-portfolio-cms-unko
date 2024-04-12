import Title from '../components/Title'
import InputText from '../components/InputText'
import SideMenu from '../components/SideMenu ';
import useValidationSchema from "../hooks/useValidationSchema";
import { ContactFormSchemaType, ContactFormSchema } from '../schema/validationSchema';

const Contact = () => {
  const { register, handleSubmit, errors } = useValidationSchema(ContactFormSchema);

  const test = ({ email }: ContactFormSchemaType) => {
    console.log(email);
  }

  return (
    <SideMenu>
      <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
        <Title title="Contact先登録ページ" />
        <p>このページでは連絡先の登録/編集/削除を行います。</p>
        <form onSubmit={handleSubmit((e) => test(e))} className='flex flex-col gap-3 w-full'>
          <InputText title="メールアドレス" id={'email'} placeholder='連絡先のメールアドレスを入力してください。' register={register('email')} errors={errors} />
          <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
        </form>
      </div>
    </SideMenu>
  )
}

export default Contact