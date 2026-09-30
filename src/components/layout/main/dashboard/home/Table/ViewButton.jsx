import React from "react";
import { HiEye } from "react-icons/hi";
import clsx from "clsx";
import Modal from "../../../../modal/Modal";
function ViewButton({ title, product, onSubmit }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-sky-500">
      <HiEye className="text-xl" />
    </button>
  );

  return (
    <Modal Trigger={Trigger} title={title} onSubmit={onSubmit}>
      <div className="flex-center gap-2">
        <p>
          آیا از{" "}
          <span
            className={clsx(
              product.isPublished ? "text-blue-500" : "text-green-500",
            )}
          >
            <strong>{product.isPublished ? "خصوصی" : "عمومی"}</strong>
          </span>{" "}
          کردن این محصول اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
}

export default ViewButton;
