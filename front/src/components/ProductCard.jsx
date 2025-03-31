import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-300 shadow-md overflow-hidden bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>
        </div>
        <AddToCartButton product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;