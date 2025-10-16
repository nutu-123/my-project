import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: 1200, status: "In Stock" },
    { name: "Smartphone", price: 800, status: "Out of Stock" },
    { name: "Headphones", price: 150, status: "In Stock" },
  ];

  return (
    <div className="product-management">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
