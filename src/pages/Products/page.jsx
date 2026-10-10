import React, { useState } from "react";
import TitleElement from "../../components/layout/main/dashboard/home/TitleElement";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import ProductsTableView from "../../components/layout/products/ProductsTableView";
import ProductsGridView from "../../components/layout/products/ProductsGridView";
import { products } from "../../data/products";
import Pagination from "../../components/layout/main/dashboard/home/Table/Pagination";
import Modal from "../../components/layout/modal/Modal";
import AddNewProductsFields from "../../components/layout/products/AddNewProductsFields";
import useLocalStorage from "../../hooks/useLocalStorage";

const AddProductBtn = () => {
  return <button className="primary-bg px-4 py-2">ایجاد محصول</button>;
};

const Button = ({ layoutType, toggleLayout, newProduct, setNewProduct }) => {
  return (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] duration-150 transition-all primary-border-color border cursor-pointer shadow"
      >
        {layoutType === "table" ? <CiViewTable /> : <CiGrid41 />}
      </button>
      <Modal
        title={"ایجاد محصول جدید"}
        Trigger={AddProductBtn}
        onSubmit={() => {
          products.push(newProduct);
          setNewProduct({
            id: crypto.randomUUID(),
            title: "",
            description: "",
            price: "",
            img: "/images/product-img.png",
            isPublished: false,
            entity: "",
          });
        }}
      >
        <AddNewProductsFields
          newProduct={newProduct}
          onChange={setNewProduct}
        />
      </Modal>
    </>
  );
};

function page() {
  // const [layoutType, setLayoutType] = useState("table");
  const [layoutType, setToLocalStorage] = useLocalStorage("Layout", "table");
  const [paginatedProducts, setPaginatedProducts] = useState([...products]);
  const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "/images/product-img.png",
    isPublished: false,
    entity: "",
  });

  const toggleLayout = () => {
    const layout = layoutType === "table" ? "grid" : "table";
    setToLocalStorage(layout);
  };

  return (
    <div className="flex flex-col gap-5">
      <TitleElement
        title={"لیست محصولات"}
        buttons={
          <Button
            layoutType={layoutType}
            toggleLayout={toggleLayout}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
          />
        }
      />
      <section>
        {layoutType === "table" ? (
          <ProductsTableView
            products={paginatedProducts}
            allProducts={[...products].reverse()}
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
