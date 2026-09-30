import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../../modal/Modal";
function DeleteBtn({ title, product, onSubmit }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-xl" />
    </button>
  );

  return (
    <Modal Trigger={Trigger} title={title} onSubmit={onSubmit}>
      <div className="flex-center gap-2">
        آیا از حذف محصول{" "}
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
          {product.title}
        </kbd>{" "}
        اطمینان دارید؟
      </div>
    </Modal>
  );
}

export default DeleteBtn;
