import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => <ProductCard key={product._id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;