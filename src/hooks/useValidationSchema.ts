import { FieldError, FieldErrors, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidationSchemaType } from "../schema/validationSchema"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useValidationSchema = (schema: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });
  return { register, handleSubmit, errors, watch }
}

export const useErrors = (type: string, errors: FieldErrors<ValidationSchemaType>) => {
  let error: FieldError | undefined;
  switch (type) {
    //LoginForm
    case 'loginId':
      error = errors.loginId;
      break
    case 'password':
      error = errors.password
      break;
    //CreateAccount
    case 'newPassword':
      error = errors.newPassword;
      break;
    case 'newPasswordConfirm':
      error = errors.newPasswordConfirm;
      break;
    //TopPage
    case 'product':
      error = errors.product;
      break;
    case 'learning':
      error = errors.learning;
      break;
    case 'profile':
      error = errors.profile;
      break;
    case 'contact':
      error = errors.contact;
      break;
    //Products
    case 'title':
      error = errors.title;
      break;
    case 'desc':
      error = errors.desc;
      break;
    //ProductDetail
    case 'appUrl':
      error = errors.appUrl;
      break;
    case 'gitUrl':
      error = errors.gitUrl;
      break;
    case 'lang':
      error = errors.lang;
      break;
    case 'lib':
      error = errors.lib;
      break;
    case 'infras':
      error = errors.infras;
      break;
    case 'func':
      error = errors.func;
      break;
    //Profile
    case 'name':
      error = errors.name;
      break;
    case 'year':
      error = errors.year;
      break;
    case 'month':
      error = errors.month;
      break;
    case 'day':
      error = errors.day;
      break;
    case 'birthplace':
      error = errors.birthplace;
      break;
    case 'biography':
      error = errors.biography;
      break;
    case 'history':
      error = errors.history;
      break;
    //Contact
    case 'email':
      error = errors.email;
      break;
  }
  return error;
};

export default useValidationSchema