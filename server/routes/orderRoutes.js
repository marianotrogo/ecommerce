import express from "express";
import { createOrder, getOrders, getOrderById, deleteOrder } from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, isAdmin, getOrders);
router.get("/:id", protect, getOrderById);
router.delete("/:id", protect, isAdmin, deleteOrder);

export default router;