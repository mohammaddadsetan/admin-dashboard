import React from "react";

function TableData({ children, className }) {
  return <td className={className}>{children}</td>;
}

export default TableData;
