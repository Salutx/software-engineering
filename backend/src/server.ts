import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import routes from './routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
