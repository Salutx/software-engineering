import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import routes from "./routes";
import cors from "cors";
import morgan from "morgan";
import { testSequelize } from "./db/testDb";

dotenv.config();
const db = process.env.NODE_ENV === 'test' ? testSequelize : sequelize;

/**
 * Main entry point for the Express application.
 * Initializes the Express app, sets up middleware, and starts the server.
 */
export const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

/**
 * Starts the server and connects to the database.
 */
db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
