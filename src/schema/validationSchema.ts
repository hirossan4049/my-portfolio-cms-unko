import { z } from "zod";

export const LoginFormSchema = z.object({
  loginId: z.string()
    .min(1, 'ログインIDを入力してください。'),
  password: z.string()
    .min(1, 'パスワードを入力してください。'),
})

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

//
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

export type ValidationSchemaType
  = LoginFormSchemaType
  & NewAccountFormSchemaType