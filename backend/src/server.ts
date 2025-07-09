import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import routes from "./routes";

dotenv.config();

/**
 * Main entry point for the Express application.
 * Initializes the Express app, sets up middleware, and starts the server.
 */
const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

/**
 * Starts the server and connects to the database.
 */
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
