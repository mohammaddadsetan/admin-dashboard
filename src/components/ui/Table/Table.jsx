import React from "react";
import TableTitle from "./elements/TableTitle";
import TableHeader from "./elements/TableHeader";
import TableHeaderData from "./elements/TableHeaderData";
import { products, tableHeaderData } from "../../../data/products";
import TableBody from "./elements/TableBody";
import TableRow from "./elements/TableRow";
import TableData from "./elements/TableData";
import clsx from "clsx";

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
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              className=" flex *:flex w-full justify-between  items-center *:items-center flex-1 shrink! *:flex-1 *:shrink even:bg-zinc-100 text-sm *:h-14  *:px-3"
            >
              <TableData>{product.id.slice(0, 10) + "..."}</TableData>
              <TableData>{product.title}</TableData>
              <TableData>
                <span
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {" "}
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </span>
              </TableData>
              <TableData>
                {product.price.toLocaleString("fa-IR") + " " + "تومان"}
              </TableData>
              <TableData>عملیات</TableData>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
}

export default Table;
