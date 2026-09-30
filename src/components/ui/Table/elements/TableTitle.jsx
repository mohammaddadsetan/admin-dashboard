import React from "react";
import TitleElement from "../../../layout/main/dashboard/home/TitleElement";

function TableTitle({ header }) {
  const { Button } = header;

  return <TitleElement buttons={<Button />} title={header.title} />;
}

export default TableTitle;
