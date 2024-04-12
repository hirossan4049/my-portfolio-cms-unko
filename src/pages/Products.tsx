import { Button } from '@mui/material'
import InputImageForm from '../components/InputImageForm'
import InputText from '../components/InputText'
import Title from '../components/Title'
import SideMenu from '../components/SideMenu '
import { useHandleForms } from '../hooks/useHandleForms'
import useValidationSchema from '../hooks/useValidationSchema';
import { ProductsFormSchema, ProductsFormSchemaType } from '../schema/validationSchema';
import ProductDetail from './ProductDetail'

import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Products = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { formNum, onAddForm, onDeleteFrom } = useHandleForms();
  const { register, handleSubmit, errors, watch } = useValidationSchema(ProductsFormSchema)

  const test = (e: ProductsFormSchemaType) => {
    console.log(e);
  }
  return (
    <SideMenu>
      <div className='flex flex-col justify-center items-center w-full h-full p-10'>
        <Title title="Product登録ページ" />
        <p>このページでは登録したいプロダクトの登録/編集/削除を行います。</p>
        <form action="" onSubmit={handleSubmit((e) => test(e))} className='flex flex-col  gap-3 w-full'>
          {formNum.map((id, i) => (
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} onChange={() => setIsOpen(!isOpen)}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='flex justify-end p-5' >
                    {isOpen
                      ?
                      <img className='' src="/src/assets/hamburger menu_close.png" alt="CLOSE" />
                      :
                      <img className='' src="/src/assets/hamburger menu_open.png" alt="OPEN" />
                    }
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='flex flex-col w-full gap-5 p-2 border rounded'>
                    <div className='w-full'>
                      <InputImageForm key={id} formDesc={<p>アプリの画像を登録します。<br />※推奨画像比率：72/35</p>} title={`アプリ`} index={i + 1} id={id} />
                      <InputText
                        title={`タイトル${i + 1}`}
                        id="title"
                        placeholder='アプリのタイトルを入力してください。'
                        register={register('title')}
                        errors={errors}
                      />
                      <InputText
                        title={`説明文${i + 1}`}
                        id="desc"
                        placeholder='アプリの説明文を入力してください。'
                        textarea={true}
                        register={register('desc')}
                        errors={errors}
                        watch={watch('desc')}
                      />
                    </div>
                    <ProductDetail register={register} errors={errors} watch={watch} />
                    <Button size="small" variant="contained" color="error" disabled={formNum.length <= 1} onClick={() => onDeleteFrom(id)} >削除</Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

          ))}
          <Button size="small" variant="contained" color="success" disabled={formNum.length < 10 ? false : true} onClick={onAddForm} >追加</Button>
          <button className='w-80 px-3 py-2 border shadow-md rounded-xl text-xl bg-primary text-white' type='submit'>登録</button>
        </form>
      </div>
    </SideMenu>
  )
}

export default Products
