import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onDelete,onUpdate }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found. Add one!</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} onDelete={onDelete} onUpdate={onUpdate}/>
        ))
      )}
    </div>
  );
}

export default ProductList;