import React, { useState } from "react";
import TableHeader from "../../ui/Table/elements/TableHeader";
import TableHeaderData from "../../ui/Table/elements/TableHeaderData";
import TableBody from "../../ui/Table/elements/TableBody";
import TableRow from "../../ui/Table/elements/TableRow";
import TableData from "../../ui/Table/elements/TableData";
import clsx from "clsx";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import EditButton from "../main/dashboard/home/Table/EditButton";
import ViewButton from "../main/dashboard/home/Table/ViewButton";
import Pagination from "../main/dashboard/home/Table/Pagination";
import Table from "../../ui/Table/Table";
import { tableAllTableHeaderData } from "../../../data/products";
import DeleteBtn from "../main/dashboard/home/Table/DeleteBtn";
function ProductsTableView({ products, setProducts, allProducts }) {
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

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const changeView = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isPublished: !product.isPublished }
          : product,
      ),
    );
  };

  return (
    <section className="flex flex-col items-center justify-center w-full border primary-border-color rounded-xl ">
      <Table headerData={tableData.header}>
        <TableHeader>
          {tableAllTableHeaderData.map((data, index) => (
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
                <img
                  src={product.img}
                  alt={product.title}
                  className="size-10 rounded-md"
                />
              </TableData>
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
              <TableData>{product.entity} </TableData>
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
      </Table>
      <Pagination
        products={allProducts}
        itemsPerPage={6}
        setItems={setProducts}
      />
    </section>
  );
}

export default ProductsTableView;
