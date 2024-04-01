import { Button } from "@mui/material";
import { useState } from "react";
import Modal from "react-modal";

function ModalForm({ imageUrl }: { imageUrl: string }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <>
      <Button size="small" variant="contained" disabled={imageUrl ? false : true} onClick={() => { setEditModalIsOpen(true) }}>モーダル開く</Button>
      <Modal
        isOpen={editModalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
          }
        }} >
        <button
          className="absolute top-5 right-5 size-10 rounded border text-3xl bg-white"
          onClick={() => {
            setEditModalIsOpen(false)
          }}
        >×</button>
        <img className="h-full aspect-[72/35] object-cover" src={imageUrl} alt="イメージ" />
      </Modal >
    </>
  );
}

export default ModalForm;