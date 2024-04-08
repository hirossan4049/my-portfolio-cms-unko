import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { ValidationSchemaType } from "../schema/validationSchema";
import { useErrors } from "../hooks/useValidationSchema";

type Props = {
  title: string;
  id: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors<ValidationSchemaType>;
  placeholder?: string;
  textarea?: boolean
  maxLength?: number;
  watch?: string;
}

const InputText = ({ title, id, register, errors, placeholder, textarea = false, maxLength = 200, watch }: Props) => {
  const error = useErrors(id, errors)

  return (
    <div className="w-full p-3">
      <label htmlFor={id} className='mr-auto text-lg'>{title}</label>
      {textarea
        ? <div className="relative w-full border">
          <textarea
            id={id}
            rows={5}
            placeholder={placeholder}
            maxLength={maxLength}
            className='w-full p-1 resize-none'
            {...register}
          />
          <div className="absolute bottom-1 right-5 text-gray-400">{`${watch !== undefined ? watch.length : 0}/${maxLength}`}</div>
          {error && <p className=" text-red-500">{error.message}</p>}
        </div>
        : <input
          id={id}
          placeholder={placeholder}
          maxLength={20}
          className='w-full border p-1'
          {...register}
        />
      }
      {error && <p className=" text-red-500">{error.message}</p>}
    </div>
  )
}

export default InputText