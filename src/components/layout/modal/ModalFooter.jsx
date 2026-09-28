import React from "react";

function ModalFooter({ onSubmit, onClose }) {
  const onSubmitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-4 py-2  border primary-border-color rounded cursor-pointer hover:bg-gray-50"
        onClick={onClose}
      >
        لغو
      </button>
      <button
        className="px-4 py-2 primary-bg rounded "
        onClick={onSubmitHandler}
      >
        تایید
      </button>
    </div>
  );
}

export default ModalFooter;
