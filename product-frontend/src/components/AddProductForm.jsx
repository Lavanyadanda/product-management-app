import React, { useState } from "react";

function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      alert("Name and Price are required!");
      return;
    }
    onAdd({ ...form, price: Number(form.price) });
    setForm({ name: "", price: "", description: "", category: "" });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;