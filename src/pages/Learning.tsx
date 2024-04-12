import { Button } from '@mui/material'
import Title from '../components/Title'
import InputText from '../components/InputText'
import InputImageForm from '../components/InputImageForm'
import SideMenu from '../components/SideMenu '
import { useHandleForms } from '../hooks/useHandleForms'
import useValidationSchema from '../hooks/useValidationSchema'
import { ProductsFormSchema } from '../schema/validationSchema'

const Learning = () => {
  const { formNum, subFormNum, onAddForm, onDeleteFrom, onSubAddForm, onDeleteSubFrom } = useHandleForms()
  const { register, handleSubmit, errors } = useValidationSchema(ProductsFormSchema)
  const test = (e: any) => {
    e.preventDefault();
  }
  return (
    <SideMenu>
      <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
        <Title title="Learning登録ページ" />
        <p>このページでは登録したい学習記録の登録/編集/削除を行います。</p>
        <form action="" onSubmit={handleSubmit((e) => test(e))} className='flex fex-col gap-10 w-full'>
          {formNum.map((id, i) => (
            <div key={i} className='flex w-full border rounded border-primary p-2'>
              <div className='flex flex-col w-full gap-5 p-2 '>
                <div className='flex w-full gap-5 border rounded'>
                  <div className='w-full'>
                    <InputImageForm key={id} title={`教材${i + 1}`} id={id} />
                    <InputText
                      title="タイトル"
                      id="title"
                      placeholder='アプリのタイトルを入力してください。'
                      register={register('title')}
                      errors={errors}
                    />
                    <InputText
                      title="説明文"
                      id="desc"
                      placeholder='アプリの説明文を入力してください。'
                      textarea={true}
                      register={register('title')}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-5 boder'>
                  {subFormNum.map((id, j) => (
                    <div key={j} className='flex w-full border p-2 gap-2'>
                      <div className='w-full'>
                        <div className='flex items-center justify-center w-full p-2'>
                          <InputImageForm key={id} title={`教材${i + 1}.${j + 1}`} id={id} />
                          <InputText
                            title="教材説明"
                            id="desc"
                            placeholder='学習教材の説明文を入力してください。'
                            textarea={true}
                            register={register('title')}
                            errors={errors}
                          />;
                        </div>
                        <div className='flex w-full p-2'>
                          <InputText
                            title="学んだこと"
                            id="desc"
                            placeholder='学習教材の説明文を入力してください。'
                            textarea={true}
                            register={register('title')}
                            errors={errors}
                          />
                          <InputText
                            title="得た技術"
                            id="desc"
                            placeholder='学習教材の説明文を入力してください。'
                            textarea={true}
                            register={register('title')}
                            errors={errors}
                          />
                        </div>
                      </div>
                      <Button size="small" variant="contained" color="error" disabled={subFormNum.length <= 1} onClick={() => onDeleteSubFrom(id)} >削除</Button>
                    </div>
                  ))}
                  <div className='flex items-center justify-center'>
                    <Button size="small" variant="contained" color="success" disabled={subFormNum.length < 10 ? false : true} onClick={onSubAddForm} >追加</Button>
                  </div>
                </div>
              </div>
              <Button size="small" variant="contained" color="error" disabled={formNum.length <= 1} onClick={() => onDeleteFrom(id)} >削除</Button>
            </div>
          ))}
          <Button size="small" variant="contained" color="success" disabled={formNum.length < 10 ? false : true} onClick={onAddForm} >追加</Button>
          <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
        </form>
      </div>
    </SideMenu>
  )
}

export default Learning
