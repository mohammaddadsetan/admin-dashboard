import React from "react";
import Modal from "./../../modal/Modal";
import { HiEye } from "react-icons/hi";
function ViewButton({ title, product }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-sky-500">
      <HiEye className="text-xl" />
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

export default ViewButton;
