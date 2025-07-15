import { Sequelize } from "sequelize";

export const testSequelize = new Sequelize("sqlite::memory:", {
  logging: false,
});
