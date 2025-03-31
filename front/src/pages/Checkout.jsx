import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart.Jsx";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState(null); // Para verificar si el usuario está logueado
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Si el carrito está vacío, redirigir a la página de productos
    if (cart.length === 0) {
      navigate("/");
    }

    // Aquí puedes verificar si el usuario está logueado, por ejemplo, con JWT o sesión
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, [cart, navigate]);

  const handleFinalizePurchase = async () => {
    setLoading(true);
    // Aquí haces la llamada a la API para procesar la compra, guardar en la base de datos, etc.
    // Puedes incluir la lógica de impresión y WhatsApp aquí.

    const purchaseDetails = {
      user,
      cart,
      shippingAddress,
      paymentMethod,
    };

    // Enviar la información a la API para procesar la compra
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchaseDetails),
      });

      if (response.ok) {
        alert("Compra realizada con éxito!");
        // Después de finalizar, enviar mensaje de WhatsApp
        window.open(`https://wa.me/549XXXXXXXXX?text=${encodeURIComponent("Compra realizada: " + JSON.stringify(purchaseDetails))}`, "_blank");
        navigate("/thank-you"); // Redirigir a página de agradecimiento
      } else {
        alert("Hubo un error en el proceso de compra");
      }
    } catch (error) {
      console.error("Error en la compra:", error);
      alert("Error en el proceso de compra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Carrito de Compras</h2>
      <div className="flex gap-6">
        {/* Aquí mostramos el resumen del carrito */}
        <div className="w-2/3">
          <Cart cart={cart} />
        </div>

        {/* Formulario para opciones de envío y pago */}
        <div className="w-1/3 bg-white p-4 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Detalles de la compra</h3>

          {/* Datos de envío */}
          <div className="mb-4">
            <label className="block text-gray-700">Dirección de Envío</label>
            <input
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Ingresa tu dirección"
            />
          </div>

          {/* Métodos de pago */}
          <div className="mb-4">
            <label className="block text-gray-700">Método de Pago</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            >
              <option value="">Selecciona un método</option>
              <option value="credit-card">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Efectivo</option>
            </select>
          </div>

          {/* Botón para finalizar compra */}
          <button
            onClick={handleFinalizePurchase}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Procesando..." : "Finalizar Compra"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;