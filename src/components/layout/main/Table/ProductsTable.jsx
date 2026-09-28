import React, { useState } from "react";
import Table from "../../../ui/Table/Table";
import TableHeader from "../../../ui/Table/elements/TableHeader";
import TableHeaderData from "../../../ui/Table/elements/TableHeaderData";
import TableBody from "../../../ui/Table/elements/TableBody";
import TableRow from "../../../ui/Table/elements/TableRow";
import TableData from "../../../ui/Table/elements/TableData";
import { products, tableHeaderData } from "../../../../data/products";
import clsx from "clsx";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";
import ViewButton from "./ViewButton";
import Pagination from "./Pagination";
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

  const [lastProducts, setLastProducts] = useState([...products]);
  const deleteProduct = (id) => {
    const filteredProducts = lastProducts.filter(
      (product) => product.id !== id,
    );
    setLastProducts(filteredProducts);
  };

  const changeView = (id) => {
    setLastProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isPublished: !product.isPublished }
          : product,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Table headerData={tableData.header}>
        <TableHeader>
          {tableHeaderData.map((data, index) => (
            <TableHeaderData key={index} title={data} />
          ))}
        </TableHeader>
        <TableBody>
          {lastProducts.map((product) => (
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
                <DeleteBtn
                  title="حذف محصول"
                  product={product}
                  onSubmit={() => deleteProduct(product.id)}
                />
                <ViewButton
                  title="تغییر وضعیت انتشار"
                  product={product}
                  onSubmit={() => changeView(product.id)}
                />
                <EditButton title="ویرایش مشخصات محصول" product={product} />
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <Pagination
          products={products}
          itemsPerPage={6}
          setItems={setLastProducts}
        />
      </Table>
    </div>
  );
}

export default ProductsTable;
