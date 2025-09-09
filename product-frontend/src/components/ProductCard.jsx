import React, { useState } from "react";

function ProductCard({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
  });

  const handleDelete = () => {
    if (window.confirm("Delete this product?")) {
      onDelete(product._id);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(product._id, formData);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <button className="edit-product" onClick={handleSave}>
            Save
          </button>
          <button
            className="edit-product"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>
            <strong>Price:</strong> Rs.{product.price}
          </p>
          <p>{product.description}</p>
          <p>
            <em>{product.category}</em>
          </p>
          <div className="button-group">
            <button className="edit-product" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
