import React from "react";

function ProductCard({ product, onDelete }) {
  const handleDelete = () => {
    if (window.confirm("Delete this product?")) {
      onDelete(product._id);
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>
        <strong>Price:</strong> Rs.{product.price}
      </p>
    
      <p>{product.description}</p>
      
      <p>
        <em>{product.category}</em>
      </p>
      
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;
