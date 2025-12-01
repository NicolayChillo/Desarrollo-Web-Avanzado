import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import seguroRoute from "./routes/seguroRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("Servidor de seguro funcionando correctamente"));

app.use("/api/seguros", seguroRoute);

const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
  }
};

iniciarServidor();
