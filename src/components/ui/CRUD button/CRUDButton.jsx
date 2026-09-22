import React from "react";
import Modal from "../../layout/modal/Modal";

function CRUDButton({ Icon, className, title }) {
  const Trigger = () => (
    <button className={className}>
      <Icon className="text-xl" />
    </button>
  );

  return <Modal Trigger={Trigger} title />;
}

export default CRUDButton;
