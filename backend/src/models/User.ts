import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export interface IUser extends Model {
  id?: number;
  email: string;
  password: string;
  createdAt?: Date;
  username?: string;
}

const User = sequelize.define<IUser>('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  }
});

export default User;
