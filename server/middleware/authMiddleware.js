import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "Acceso no autorizado" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) return res.status(404).json({ message: "Usuario no encontrado" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Acceso denegado. Se requieren permisos de administrador." });
  }
};

export { protect, isAdmin };