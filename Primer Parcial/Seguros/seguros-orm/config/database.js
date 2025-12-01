// Configurar Sequelize para conectar con MySQL
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Crear la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
