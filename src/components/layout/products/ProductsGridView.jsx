import React from "react";
import { products } from "../../../data/products";
import ProductCard from "./ProductCard";
import Pagination from "../main/dashboard/home/Table/Pagination";

function ProductsGridView({
  paginatedProducts,
  allProducts,
  setPaginatedProducts,
}) {
  return (
    <>
      <section className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
      <Pagination
        itemsPerPage={4}
        products={allProducts}
        setItems={setPaginatedProducts}
      />
    </>
  );
}

export default ProductsGridView;
