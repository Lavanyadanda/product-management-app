const API_URL = "http://localhost:5000/api/products";
export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    alert(err.message);
    return [];
  }
};
export const addProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
export const updateProduct = async (id, updatedData) => { 
   const res = await fetch(`${API_URL}/${id}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};
