import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import "./App.css";
import { getProducts, addProduct, deleteProduct } from "./api/productApi";

function App() {
  const [products, setProducts] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
const [search, setSearch] = useState("");
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAddProduct = async (product) => {
    const newProduct = await addProduct(product);
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p._id !== id));
  };

  const handleSort = () => {
    const sorted = [...products].sort((a, b) =>
      sortAsc ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
    setSortAsc(!sortAsc); 
  };
const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Product Management App</h1>
      <AddProductForm onAdd={handleAddProduct} />
        <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: "10px", padding: "5px", width: "60%" }}
      />
      <button className="sort-btn" onClick={handleSort}>
        Sort by Price {sortAsc ? "⬆️" : "⬇️"}
      </button>
      {/* <ProductList products={products} onDelete={handleDeleteProduct} /> */}
      <ProductList products={filteredProducts} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;