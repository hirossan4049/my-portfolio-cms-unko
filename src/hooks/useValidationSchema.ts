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
    case 'loginId':
      error = errors.loginId;
      break
    case 'password':
      error = errors.password
      break;
    case 'newPassword':
      error = errors.newPassword;
      break;
    case 'newPasswordConfirm':
      error = errors.newPasswordConfirm;
      break;
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
    case 'email':
      error = errors.email;
      break;
  }
  return error;
};

export default useValidationSchema