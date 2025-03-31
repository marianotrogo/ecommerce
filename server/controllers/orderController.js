import Order from "../models/Order.js";
import Product from "../models/Product.js";

// Crear una orden y actualizar stock
export const createOrder = async (req, res) => {
  try {
    const { products, totalAmount, paymentMethod, shippingAddress } = req.body;

    // Verificar stock de cada producto
    for (let item of products) {
      const product = await Product.findById(item.product);
      if (!product) return res.status(404).json({ message: `Producto ${item.product} no encontrado` });

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Stock insuficiente para ${product.name}` });
      }
    }

    // Descontar stock
    for (let item of products) {
      const product = await Product.findById(item.product);
      product.stock -= item.quantity;
      await product.save();
    }

    // Crear la orden
    const newOrder = new Order({ user: req.user._id, products, totalAmount, paymentMethod, shippingAddress });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error al procesar la orden" });
  }
};

// Obtener todas las órdenes
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener órdenes" });
  }
};

// Obtener una orden por ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user").populate("products.product");
    if (!order) return res.status(404).json({ message: "Orden no encontrada" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la orden" });
  }
};

// Eliminar una orden y reponer stock
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Orden no encontrada" });

    // Reponer stock
    for (let item of order.products) {
      const product = await Product.findById(item.product);
      if (product) {
        product.stock += item.quantity;
        await product.save();
      }
    }

    await order.deleteOne();
    res.json({ message: "Orden eliminada y stock repuesto" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar orden" });
  }
};