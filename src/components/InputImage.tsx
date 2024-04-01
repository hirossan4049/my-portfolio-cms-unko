import React, { InputHTMLAttributes, forwardRef } from "react";

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>["id"];
};

const InputImage = forwardRef<HTMLInputElement, Props>(
  ({ onChange, id }, ref) => {
    return (
      <input
        ref={ref}
        id={id}
        name={id}
        type="file"
        accept={"image/jpeg, image/png, image/jpg"}
        onChange={onChange}
        hidden
      />
    );
  }
);

export default InputImage;