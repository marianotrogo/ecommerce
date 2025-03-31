import React from "react";

const Cart = ({ cart, onUpdateQuantity, onRemoveFromCart }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
        {cart.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
                <div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)} // Eliminar del carrito
                    className="text-red-600 hover:text-red-800"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => alert("Checkout no implementado")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Proceder al Pago
          </button>
          <button
            onClick={() => alert("Cerrando carrito")}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;