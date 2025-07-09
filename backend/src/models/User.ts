import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

/**
 * Represents a user in the system.
 * The IUser interface defines the structure of a user object.
 */
export interface IUser extends Model {
  id?: number;
  email: string;
  password: string;
  createdAt?: Date;
  username?: string;
}

/**
 * User model definition using Sequelize.
 * This model represents the users table in the database.
 * It includes fields for `email`, `password`, `createdAt` timestamp, and an `username`.
 */
const User = sequelize.define<IUser>("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;
