import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useGetImageUrl } from "./useGetImageUrl";

export const useHandleForms = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formNum, setFormNum] = useState<string[]>([uuidv4()]);
  const [subFormNum, setSubFormNum] = useState<string[]>([uuidv4()]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { imageUrl, setImageUrl } = useGetImageUrl({ file: imageFile });

  const onAddForm = () => {
    setFormNum([...formNum, uuidv4()])
  }

  const onDeleteFrom = (id: string) => {
    setFormNum(formNum.filter((from) => (from !== id)));
    console.log(formNum)
  };

  const onSubAddForm = () => {
    setSubFormNum([...subFormNum, uuidv4()])
  }

  const onDeleteSubFrom = (id: string) => {
    setSubFormNum(subFormNum.filter((from) => (from !== id)));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  const handleClickCancelButton = () => {
    setImageFile(null);
    setImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return { formNum, subFormNum, imageUrl, imageFile, fileInputRef, handleFileChange, handleClickCancelButton, onAddForm, onDeleteFrom, onSubAddForm, onDeleteSubFrom }
}