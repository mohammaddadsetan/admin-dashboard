import React from "react";
import OverViewContainer from "../../../../../../ui/OverViewContainer/OverViewContainer";
import { products } from "../../../../../../../data/products";
import ProductCard from "./ProductCard";
function LastProducts() {
  return (
    <div className="col-span-3  max-h-max">
      <OverViewContainer
        title="آخرین محصولات"
        buttonLabel="نمایش کامل لیست"
        itemLength={products.length}
        navigate={"/products"}
      >
        {products.slice(-3).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
      </OverViewContainer>
    </div>
  );
}

export default LastProducts;
