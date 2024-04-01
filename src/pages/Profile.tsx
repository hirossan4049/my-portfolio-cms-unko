import { Button } from '@mui/material'
import InputImageForm from '../components/InputImageForm'
import InputText from '../components/InputText'
import Title from '../components/Title'
import { useHandleForms } from '../hooks/useHandleForms'

const Profile = () => {
  const { formNum, onAddForm, onDeleteFrom } = useHandleForms();
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
      <Title title="Profile登録ページ" />
      <p>このページではプロフィールの登録/編集/削除を行います。</p>
      <form action="" onSubmit={(e) => test(e)} className='flex flex-col gap-3 w-full'>
        {formNum.map((id) => (
          <div className='flex w-full gap-5 p-2 border rounded'>
            <div className='w-full'>
              <InputImageForm key={id} formDesc={<p>※推奨画像比率：1/1</p>
              } title={`顔写真の`} id={id} />
            </div>
            <Button size="small" variant="contained" color="error" disabled={formNum.length <= 1} onClick={() => onDeleteFrom} >削除</Button>
          </div>
        ))}
        <Button size="small" variant="contained" color="success" disabled={formNum.length < 10 ? false : true} onClick={onAddForm} >追加</Button>
        <InputText title="氏名" id="name" placeholder='氏名を入力してください。' />
        <InputText title="生年月日" id="birthday" placeholder='生年月日を入力してください。' />
        <InputText title="出身" id="Birthplace" placeholder='出身をを入力してください。' />
        <InputText title="略歴" id="Biography" placeholder='略歴を入力してください。' textarea={true} />
        <InputText title="来歴" id="history" placeholder='来歴を入力してください。' textarea={true} />
        <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
      </form>
    </div>
  )
}

export default Profile
