import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("API Funcionando")
})

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(()=>{
        console.log("Conected to MongoDB");
        app.listen(PORT, ()=> console.log(`Servidor corriendo en el puerto ${PORT}`))
    })
    .catch((error)=> console.log("Error en la conexion a MongoDB: ", error)
    )