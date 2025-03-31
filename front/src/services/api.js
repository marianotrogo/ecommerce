// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";  // Asegúrate de que tu backend esté corriendo en el puerto correcto

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;