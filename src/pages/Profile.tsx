import { Button } from '@mui/material'
import InputImageForm from '../components/InputImageForm'
import InputText from '../components/InputText'
import Title from '../components/Title'
import SideMenu from '../components/SideMenu '
import { useHandleForms } from '../hooks/useHandleForms'
import useValidationSchema from '../hooks/useValidationSchema'
import { ProfileFormSchema, ProfileFormSchemaType } from '../schema/validationSchema'

const Profile = () => {
  const { formNum, onAddForm, onDeleteFrom } = useHandleForms();
  const { register, handleSubmit, errors, watch } = useValidationSchema(ProfileFormSchema)

  const test = (e: ProfileFormSchemaType) => {
    console.log(e);
  }
  return (
    <SideMenu>
      <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
        <Title title="Profile登録ページ" />
        <p>このページではプロフィールの登録/編集/削除を行います。</p>
        <form action="" onSubmit={handleSubmit((e) => test(e))} className='flex flex-col gap-3 w-full'>
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
          <InputText
            title="氏名"
            id="name"
            placeholder='氏名を入力してください。'
            register={register('name')}
            errors={errors}
          />
          <div className='w-full p-3'>
            <p>生年月日を入力してください。</p>
            <div className='flex justify-around'>
              <InputText
                title="年"
                id="year"
                placeholder='年'
                register={register('year')}
                errors={errors}
              />
              <InputText
                title="月"
                id="month"
                placeholder='月'
                register={register('month')}
                errors={errors}
              />
              <InputText
                title="日"
                id="day" placeholder='日'
                register={register('day')}
                errors={errors}
              />
            </div>
          </div>
          <InputText
            title="出身"
            id="birthplace"
            placeholder='出身をを入力してください。'
            register={register('birthplace')}
            errors={errors}
          />
          <InputText
            title="略歴"
            id="biography"
            placeholder='略歴を入力してください。'
            textarea={true}
            register={register('biography')}
            errors={errors}
            watch={watch('biography')}
          />
          <InputText
            title="来歴"
            id="history"
            placeholder='来歴を入力してください。'
            textarea={true}
            register={register('history')}
            errors={errors}
            watch={watch('history')}
          />
          <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
        </form>
      </div>
    </SideMenu>
  )
}

export default Profile
