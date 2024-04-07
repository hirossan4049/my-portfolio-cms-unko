import { FieldError, FieldErrors, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidationSchemaType } from "../schema/validationSchema"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useValidationSchema = (schema: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });
  return { register, handleSubmit, errors, useErrors }
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
    case 'email':
      error = errors.email;
      break;
    case 'newPassword':
      error = errors.newPassword;
      break;
    case 'newPasswordConfirm':
      error = errors.newPasswordConfirm;
      break;
  }
  return error;
};

export default useValidationSchema