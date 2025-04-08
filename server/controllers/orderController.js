import Order from "../models/Order.js";

// Función para generar el ID de 5 dígitos
const generateOrderId = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Genera un ID único de 5 dígitos
};

export const createOrder = async (req, res) => {
  try {
    const { userId, customerData, shippingAddress, city, postalCode, paymentMethod, cart } = req.body;

    // Generar un ID único para el pedido
    const orderId = generateOrderId();

    // Calcular el total del pedido
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Crear el pedido
    const order = new Order({
      orderId,
      user: userId,
      customerData,
      shippingAddress,
      city,
      postalCode,
      paymentMethod,
      products: cart.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount,
    });

    // Guardar el pedido
    await order.save();

    // Enviar una respuesta de éxito con el ID del pedido
    res.status(201).json({ message: "Pedido creado con éxito", orderId });
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    res.status(500).json({ message: "Error al crear el pedido" });
  }
};
