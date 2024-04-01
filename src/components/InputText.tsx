import { useState } from "react"

type Props = {
  title: string;
  id: string;
  placeholder?: string;
  textarea?: boolean
  maxLength?: number;
}

const InputText = ({ title, id, placeholder, textarea = false, maxLength = 200 }: Props) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="w-full p-3">
      <label htmlFor={id} className='mr-auto text-lg'>{title}</label>
      {textarea
        ? <div className="relative w-full border">
          <textarea id={id} value={text} name={id} rows={5} placeholder={placeholder} maxLength={maxLength} onChange={(e) => setText(e.target.value)} className='w-full p-1 resize-none' />
          <div className="absolute bottom-1 right-5 text-gray-400">{`${text.length}/${maxLength}`}</div>
        </div>
        : <input id={id} value={text} name={id} placeholder={placeholder} maxLength={20} onChange={(e) => setText(e.target.value)} className='w-full border p-1' />
      }
    </div>
  )
}

export default InputText