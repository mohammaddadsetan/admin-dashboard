import React from "react";
import Table from "../../../../ui/Table/Table";
import TableHeader from "../../../../ui/Table/elements/TableHeader";
import TableHeaderData from "../../../../ui/Table/elements/TableHeaderData";
import TableBody from "../../../../ui/Table/elements/TableBody";
import TableRow from "../../../../ui/Table/elements/TableRow";
import TableData from "../../../../ui/Table/elements/TableData";
import { products, tableHeaderData } from "../../../../../data/products";
import clsx from "clsx";
import CRUDButton from "../../../../ui/CRUD button/CRUDButton";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";

function ProductsTable() {
  const tableData = {
    header: {
      title: "لیست محصولات",
      Button: () => (
        <Link
          to={"/products"}
          className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
        >
          <span>صفحه محصولات</span>
          <MdOpenInNew />
        </Link>
      ),
    },
  };

  return (
    <div>
      <Table headerData={tableData.header}>
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
              <TableData className="flex items-center gap-2">
                <CRUDButton
                  Icon={HiOutlineTrash}
                  className="cursor-pointer text-xl text-red-500"
                  title="حذف مجصول"
                />
                <CRUDButton
                  Icon={HiEye}
                  className="cursor-pointer text-xl text-sky-500"
                  title="مشاهده جزئیات مجصول"
                />
                <CRUDButton
                  Icon={BiEdit}
                  className="cursor-pointer text-xl text-green-500"
                  title="ویرایش مشخصات محصول"
                />
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTable;
