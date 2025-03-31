import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart.Jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false); // Controla la visibilidad del carrito

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    // Cargar carrito desde localStorage cuando el componente se monta
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    fetchProducts();
  }, []);

  useEffect(() => {
    // Guardar carrito en localStorage cada vez que cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Nuestros Productos</h2>
        
        {/* Carrito en la parte superior derecha */}
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 absolute top-4 right-4"
        >
          🛒 {cart.length}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}

      {/* El carrito solo aparece si showCart es true */}
      {showCart && (
        <div className="fixed top-16 right-4 bg-white shadow-lg p-4 z-50 w-72 h-96 overflow-auto">
          <h3 className="text-xl font-bold mb-4">Carrito de compras</h3>
          <div className="overflow-y-auto max-h-72">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center my-2">
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-4">
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
