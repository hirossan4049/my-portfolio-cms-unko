import React, { useState } from 'react'
import Title from '../components/Title'
import { Button } from '@mui/material'
import InputText from '../components/InputText'
import { v4 as uuidv4 } from 'uuid'
import InputImageForm from '../components/InputImageForm'

const Products = () => {
  const [formNum, setFormNum] = useState<string[]>([uuidv4()]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
  }

  const onAddImageForm = () => {
    setFormNum([...formNum, uuidv4()])
  }

  return (
    <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
      <Title title="Product登録ページ" />
      <p>このページでは登録したいプロダクトの登録/編集/削除を行います。</p>
      <form action="" onSubmit={(e) => test(e)} className='flex flex-col gap-3 w-full'>
        {formNum.map((id, i) => (
          <div className='flex w-full gap-5 p-2 border rounded'>
            <div className='w-full'>
              <InputImageForm key={id} formDesc={<p>アプリの画像を登録します。<br />※推奨画像比率：72/35</p>} title={`アプリ`} index={i+1} id={id} setImage={setImageFile} />
              <InputText title={`タイトル${i+1}`} id="title" placeholder='アプリのタイトルを入力してください。' />
              <InputText title={`説明文${i + 1}`} id="desc" placeholder='アプリの説明文を入力してください。' textarea={true} />
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

export default Products