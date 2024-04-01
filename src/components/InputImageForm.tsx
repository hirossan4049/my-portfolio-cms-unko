import { ReactElement } from "react";
import { Button } from "@mui/material";
import ModalForm from "./ModalForm";
import InputImage from "./InputImage";
import { useHandleForms } from "../hooks/useHandleForms";

type Props = {
  title: string;
  id: string;
  formDesc?: string | ReactElement;
  index?: number | "";
}
function InputImageForm({ title, id, index = "", formDesc = undefined }: Props) {
  const { imageUrl, imageFile, fileInputRef, handleFileChange, handleClickCancelButton } = useHandleForms()
  return (
    <>
      {formDesc && formDesc}
      <div className="flex w-full gap-5">
        <div className="sm:flex justify-between w-full border p-2">
          {imageUrl && imageFile ? (
            <>
              <div className="relative">
                <img
                  src={imageUrl}
                  alt="アップロード画像"
                  className="h-20 aspect-[72/35] "
                >
                </img>
              </div>
            </>
          ) : (
            <label
              htmlFor={id}
              className="flex items-center justify-center h-20 p-2 border-4 border-gray-400 rounded-xl border-dashed overflow-hidden cursor-pointer"
            >
              <InputImage
                ref={fileInputRef}
                id={id}
                onChange={handleFileChange}
              />
              {`+ ${title}画像${index}をアップロード`}
            </label>
          )}
          <label htmlFor="name">{imageFile?.name}</label>
          <div className="flex flex-col p-2 gap-2">
            <ModalForm imageUrl={imageUrl} />
            <Button size="small" variant="contained" color="error" disabled={imageFile ? false : true} onClick={handleClickCancelButton} >削除</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputImageForm;
