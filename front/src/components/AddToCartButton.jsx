import React, { useState } from "react";

const AddToCartButton = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, Math.min(product.stock, Number(e.target.value)));
        setQuantity(value);
    };



    return (
        <div className="flex flex-col items-center space-y-2 mt-4">
            <div className="flex items-center space-x-2">
                <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 p-1 border border-gray-300 rounded text-center"
                />
                <button
                    onClick={() => onAddToCart(product, quantity)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                >
                    Agregar al carrito
                </button>
            </div>
            <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>
        </div>
    );
};

export default AddToCartButton;