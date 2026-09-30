import React, { useState } from "react";
import TitleElement from "../../components/layout/main/dashboard/home/TitleElement";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import ProductsTableView from "../../components/layout/products/ProductsTableView";
import ProductsGridView from "../../components/layout/products/ProductsGridView";
import { products } from "../../data/products";
import Pagination from "../../components/layout/main/dashboard/home/Table/Pagination";

function page() {
  const [layoutType, setLayoutType] = useState("table");
  const [paginatedProducts, setPaginatedProducts] = useState([...products]);

  const Button = () => {
    return (
      <>
        <button
          onClick={toggleLayout}
          className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] duration-150 transition-all primary-border-color border cursor-pointer shadow"
        >
          {layoutType === "table" ? <CiViewTable /> : <CiGrid41 />}
        </button>
        <button className="primary-bg px-4 py-2">ایجاد محصول</button>
      </>
    );
  };

  const toggleLayout = () => {
    const layout = layoutType === "table" ? "grid" : "table";
    setLayoutType(layout);
  };

  return (
    <div className="flex flex-col gap-5">
      <TitleElement title={"لیست محصولات"} buttons={<Button />} />
      <section>
        {layoutType === "table" ? (
          <ProductsTableView
            products={paginatedProducts}
            allProducts={products}
            setProducts={setPaginatedProducts}
          />
        ) : (
          <ProductsGridView
            paginatedProducts={paginatedProducts}
            allProducts={products}
            setPaginatedProducts={setPaginatedProducts}
          />
        )}
      </section>
    </div>
  );
}

export default page;
