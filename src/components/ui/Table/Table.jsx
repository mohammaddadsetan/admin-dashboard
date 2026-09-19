import React from "react";
import TableTitle from "./elements/TableTitle";
import TableHeader from "./elements/TableHeader";
import TableHeaderData from "./elements/TableHeaderData";
import { tableHeaderData } from "../../../data/products";

function Table({ data }) {
  return (
    <div className="border primary-border-color rounded p-5 space-y-8">
      <TableTitle headerTitle={data.headerTitle} />
      <table className="w-full">
        <TableHeader>
          {tableHeaderData.map((data, index) => (
            <TableHeaderData key={index} title={data} />
          ))}
        </TableHeader>
      </table>
    </div>
  );
}

export default Table;
