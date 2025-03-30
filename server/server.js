import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req,res)=>{
    res.send("API Funcionando")
})

const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=> console.log(`Servidor corriendo en el puerto ${PORT}`)
    )

