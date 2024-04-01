import Title from '../components/Title'
import InputText from '../components/InputText'

const Contact = () => {
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
      <Title title="Profile登録ページ" />
      <p>このページでは連絡先の登録/編集/削除を行います。</p>
      <form action="" onSubmit={(e) => test(e)} className='flex flex-col gap-3 w-full'>
        <InputText title="メールアドレス" id="email" placeholder='連絡先のメールアドレスを入力してください。' />
        <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
      </form>
    </div>
  )
}

export default Contact