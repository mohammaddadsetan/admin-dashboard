import React from "react";
import Modal from "./../../modal/Modal";
import { BiEdit } from "react-icons/bi";
function EditButton({ title, product }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-500">
      <BiEdit className="text-xl" />
    </button>
  );

  return (
    <Modal Trigger={Trigger} title={title}>
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

export default EditButton;
