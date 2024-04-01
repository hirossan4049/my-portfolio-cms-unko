import React, { useState } from 'react'
import Title from '../components/Title'
import { Button } from '@mui/material'
import InputText from '../components/InputText'
import { v4 as uuidv4 } from 'uuid'
import InputImageForm from '../components/InputImageForm'

const Learning = () => {
  const [formNum, setFormNum] = useState<string[]>([uuidv4()]);
  const [learnNum, setLearnNum] = useState<string[]>([uuidv4()]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
  }

  const onAddImageForm = () => {
    setFormNum([...formNum, uuidv4()])
  }
  const onAddLearnForm = () => {
    setLearnNum([...learnNum, uuidv4()])
  }

  return (
    <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
      <Title title="Learning登録ページ" />
      <p>このページでは登録したい学習記録の登録/編集/削除を行います。</p>
      <form action="" onSubmit={(e) => test(e)} className='flex fex-col gap-10 w-full'>
        {formNum.map((id, i) => (
          <div className='flex w-full border rounded border-primary p-2'>
            <div className='flex flex-col w-full gap-5 p-2 '>
              <div className='flex w-full gap-5 border rounded'>
                <div className='w-full'>
                  <InputImageForm key={id} title={`教材${i + 1}`} id={id} setImage={setImageFile} />
                  <InputText title="タイトル" id="title" placeholder='アプリのタイトルを入力してください。' />
                  <InputText title="説明文" id="desc" placeholder='アプリの説明文を入力してください。' textarea={true} />
                </div>
              </div>
              <div className='flex flex-col gap-5 boder'>
                {learnNum.map((id, j) => (
                  <div className='flex w-full border p-2 gap-2'>
                    <div className='w-full'>
                      <div className='flex items-center justify-center w-full p-2'>
                        <InputImageForm key={id} title={`教材${i + 1}.${j + 1}`} id={id} setImage={setImageFile} />
                        <InputText title="教材説明" id="desc" placeholder='学習教材の説明文を入力してください。' textarea={true} />
                      </div>
                      <div className='flex w-full p-2'>
                        <InputText title="学んだこと" id="desc" placeholder='学習教材の説明文を入力してください。' textarea={true} />
                        <InputText title="得た技術" id="desc" placeholder='学習教材の説明文を入力してください。' textarea={true} />
                      </div>
                    </div>
                    <Button size="small" variant="contained" color="error" disabled={learnNum.length <= 1} onClick={() => {
                      setLearnNum(learnNum.filter((image) => (image !== id)));
                      console.log(learnNum)
                      console.log(id)
                    }} >削除</Button>
                  </div>
                ))}
                <div className='flex items-center justify-center'>
                  <Button size="small" variant="contained" color="success" disabled={learnNum.length < 10 ? false : true} onClick={onAddLearnForm} >追加</Button>
                </div>
              </div>
            </div>
            <Button size="small" variant="contained" color="error" disabled={formNum.length <= 1} onClick={() => {
              setFormNum(formNum.filter((image) => (image !== id)));
              console.log(formNum)
              console.log(id)
            }} >削除</Button>
          </div>
        ))}
        <Button size="small" variant="contained" color="success" disabled={formNum.length < 10 ? false : true} onClick={onAddImageForm} >追加</Button>
        <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
      </form>
    </div>
  )
}

export default Learning