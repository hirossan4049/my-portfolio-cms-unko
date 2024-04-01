import React, { useState } from 'react'
import Title from '../components/Title'
import { Button } from '@mui/material'
import InputText from '../components/InputText'
import { v4 as uuidv4 } from 'uuid'
import InputImageForm from '../components/InputImageForm'

const ProductDetail = () => {
  const [imageFormNum, setImageFormNum] = useState<string[]>([uuidv4()]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const test = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
  }

  const onAddImageForm = () => {
    setImageFormNum([...imageFormNum, uuidv4()])
  }

  return (
    <div className='*:flex *:flex-col *:justify-center *:items-center w-full h-full p-10'>
      <Title title="ProductDetail登録ページ" />
      <p>このページでは登録したいプロダクト詳細を登録/編集/削除を行います。</p>
      <form action="" onSubmit={(e) => test(e)} className='flex flex-col gap-3 w-full'>
        {imageFormNum.map((id) => (
          <div className='flex w-full gap-5 p-2 border rounded'>
            <div className='w-full'>
              <InputImageForm key={id} formDesc={<p>※推奨画像比率：72/35</p>
              } title={``} id={id} setImage={setImageFile} />
            </div>
            <Button size="small" variant="contained" color="error" disabled={imageFormNum.length <= 1} onClick={() => {
              setImageFormNum(imageFormNum.filter((image) => (image !== id)));
              console.log(id)
            }} >削除</Button>
          </div>

        ))}
        <Button size="small" variant="contained" color="success" disabled={imageFormNum.length < 10 ? false : true} onClick={onAddImageForm} >追加</Button>
        <InputText title="アプリURL" id="appUrl" placeholder='アプリのURLを入力してください。' />
        <InputText title="Github URL" id="gitUrl" placeholder='GithubのURLを入力してください。' />
        <InputText title="アプリ説明文" id="desc" placeholder='アプリの説明文を入力してください。' textarea={true} />
        <InputImageForm title={'インフラ構成図'} id={'infra'} setImage={setImageFile} />
        <InputText title="使用言語" id="lang" placeholder='アプリの使用言語をカンマ区切りで入力してください。' />
        <InputText title="ライブラリ" id="lib" placeholder='アプリ開発で使用したライブラリをカンマ区切りで入力してください。' />
        <InputText title="インフラ" id="infras" placeholder='アプリで使用しているインフラ技術をカンマ区切りで入力してください。' />
        <InputText title="アプリ機能" id="func" placeholder='アプリの機能を入力してください。' textarea={true} />
        <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
      </form>
    </div>
  )
}

export default ProductDetail