import { Button } from '@mui/material';
import InputImageForm from '../components/InputImageForm';
import InputText from '../components/InputText';
import Title from '../components/Title';
import SideMenu from '../components/SideMenu ';
import { useHandleForms } from '../hooks/useHandleForms';

const TopPage = () => {
  const { formNum, onAddForm, onDeleteFrom } = useHandleForms();
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <SideMenu>
      <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
        <Title title="TopPage設定" />
        <p>このページではプロフィールのTOP画面の設定を行います。</p>
        <p>TOP画面でスライド表示する画像を登録します。<br />※複数設定可能(最大10枚まで)</p>
        <form action="" onSubmit={(e) => test(e)} className='flex flex-col gap-3 w-full'>
          {formNum.map((id, i) => (
            <div className='flex w-full gap-5 p-2 border rounded'>
              <div className='w-full'>
                <InputImageForm key={id} index={i + 1} formDesc={<p>※推奨画像比率：72/35</p>
                } title={``} id={id} />
              </div>
              <Button size="small" variant="contained" color="error" disabled={formNum.length <= 1} onClick={() => onDeleteFrom(id)} >削除</Button>
            </div>
          ))}
          <Button size="small" variant="contained" color="success" disabled={formNum.length < 10 ? false : true} onClick={onAddForm} >追加</Button>
          <InputText title="Product説明文" id="product" placeholder='Productの説明文を入力してください。' textarea={true} />
          <InputText title="Learning説明文" id="learning" placeholder='Learningの説明文を入力してください。' textarea={true} />
          <InputText title="Profile説明文" id="profile" placeholder='Profileの説明文を入力してください。' textarea={true} />
          <InputText title="Contact説明文" id="contact" placeholder='Contactの説明文を入力してください。' textarea={true} />
          <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
        </form>
      </div>
    </SideMenu>
  )
}

export default TopPage
