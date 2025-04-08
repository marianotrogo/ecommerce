import express from "express";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

// Ruta para crear un pedido
router.post("/create", createOrder);

export default router;