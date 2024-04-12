import { z } from "zod";

//LoginForm
export const LoginFormSchema = z.object({
  loginId: z.string()
    .min(1, 'ログインIDを入力してください。'),
  password: z.string()
    .min(1, 'パスワードを入力してください。'),
})

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

//CreateAccount
export const NewAccountFormSchema = z.object({
  email: z.string()
    .min(1, '登録するメールアドレスを入力してください。'),
  newPassword: z.string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      'パスワードは半角英数字混合で入力してください'
    ),
  newPasswordConfirm: z
    .string()
    .min(1, '確認用のパスワードを入力してください'),
}).superRefine(({ newPassword, newPasswordConfirm }, ctx) => {
  if (newPassword !== newPasswordConfirm) {
    ctx.addIssue({
      path: ['newPasswordConfirm'],
      code: 'custom',
      message: 'パスワードが一致しません',
    });
  }
});

export type NewAccountFormSchemaType = z.infer<typeof NewAccountFormSchema>;

//TopPage
export const TopFormSchema = z.object({
  product: z.string().max(200),
  learning: z.string().max(200),
  profile: z.string().max(200),
  contact: z.string().max(200),
})
export type TopFormSchemaType = z.infer<typeof TopFormSchema>;

//ProductDetail
export const ProductDetailFormSchema = z.object({
  appUrl: z.string()
    .url('URL形式で入力してください。')
    .min(1, "URLを入力してください。")
    .max(200, "URLは200文字以内で入力してください。"),
  gitUrl: z.string()
    .url('URL形式で入力してください。')
    .min(1, "URLを入力してください。")
    .max(200, "URLは200文字以内で入力してください。"),
  desc: z.string()
    .min(1, "説明文を入力してください。")
    .max(200, "説明文は200文字以内で入力してください。"),
  lang: z.string()
    .min(1, "使用言語を入力してください。")
    .max(20, "使用言語は20文字以内で入力してください。"),
  lib: z.string()
    .min(1, "ライブラリを入力してください。")
    .max(20, "ライブラリは20文字以内で入力してください。"),
  infras: z.string()
    .min(1, "インフラを入力してください。")
    .max(20, "インフラは20文字以内で入力してください。"),
  func: z.string()
    .min(1, "アプリ機能を入力してください。")
    .max(200, "アプリ機能は200文字以内で入力してください。"),
})
export type ProductDetailFormSchemaType = z.infer<typeof ProductDetailFormSchema>;

//Products
export const ProductsFormSchema = z.object({
  title: z.string()
    .min(1, "タイトルを入力してください。")
    .max(20, "タイトルは20文字以内で入力してください。"),
  desc: z.string()
    .min(1, "説明文を入力してください。")
    .max(200, "説明文は200文字以内で入力してください。"),
}).and(ProductDetailFormSchema)
export type ProductsFormSchemaType = z.infer<typeof ProductsFormSchema>;

//Profile
export const ProfileFormSchema = z.object({
  name: z.string()
    .min(1, "氏名を入力してください。")
    .max(20, "氏名は20文字以内で入力してください。"),
  year: z.number({ invalid_type_error: "数字で" }),
    // .min(1, "有効な年を入力してください。")
    // .max(12, "有効な年を入力してください。")
    // .optional(),
  //TODO 
  month: z
    .number()
    .nullable()
    .transform((val) => (val === null ? null : Math.floor(val))),
  day: z.coerce.number()
    .lte(31, "有効な日付を入力してください。"),
  birthplace: z.string()
    .max(10, '出身の文字列が長すぎます。'),
  biography: z.string()
    .min(1, "略歴を入力してください。")
    .max(200, "略歴は200文字以内で入力してください。"),
  history: z.string()
    .min(1, "来歴を入力してください。")
    .max(200, "来歴は200文字以内で入力してください。"),
})
export type ProfileFormSchemaType = z.infer<typeof ProfileFormSchema>;

//Contact
export const ContactFormSchema = z.object({
  email: z.string()
    .min(1, 'メールアドレスを入力してください。'),
})
export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

export type ValidationSchemaType
  = LoginFormSchemaType
  & ContactFormSchemaType
  & NewAccountFormSchemaType
  & TopFormSchemaType
  & ProductsFormSchemaType
  & ProductDetailFormSchemaType
  & ProfileFormSchemaType