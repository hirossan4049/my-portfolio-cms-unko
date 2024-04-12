import InputImageForm from '../components/InputImageForm'
import InputText from '../components/InputText'
import { ValidationSchemaType } from '../schema/validationSchema'
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

type Props = {
  register: UseFormRegister<ValidationSchemaType>;
  errors: FieldErrors<ValidationSchemaType>;
  watch: UseFormWatch<ValidationSchemaType>;
}

const ProductDetail = ({ register, errors, watch }: Props) => {
  return (
    <>
      <InputText
        title="アプリURL"
        id="appUrl"
        placeholder='アプリのURLを入力してください。'
        register={register('appUrl')}
        errors={errors}
      />
      <InputText
        title="Github URL"
        id="gitUrl"
        placeholder='GithubのURLを入力してください。'
        register={register('gitUrl')}
        errors={errors}
      />
      <InputText
        title="アプリ説明文"
        id="desc"
        placeholder='アプリの説明文を入力してください。'
        textarea={true}
        register={register('desc')}
        errors={errors}
        watch={watch('desc')}
      />
      <InputImageForm title={'インフラ構成図'} id={'infra'} />
      <InputText
        title="使用言語"
        id="lang"
        placeholder='アプリの使用言語をカンマ区切りで入力してください。'
        register={register('lang')}
        errors={errors}
      />
      <InputText
        title="ライブラリ"
        id="lib"
        placeholder='アプリ開発で使用したライブラリをカンマ区切りで入力してください。'
        register={register('lib')}
        errors={errors}
      />
      <InputText
        title="インフラ"
        id="infras"
        placeholder='アプリで使用しているインフラ技術をカンマ区切りで入力してください。'
        register={register('infras')}
        errors={errors}
      />
      <InputText
        title="アプリ機能"
        id="func"
        placeholder='アプリの機能を入力してください。'
        textarea={true}
        register={register('func')}
        errors={errors}
        watch={watch('func')}
      />
    </>
  )
}

export default ProductDetail
