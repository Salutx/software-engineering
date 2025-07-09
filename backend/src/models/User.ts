import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export interface IUser extends Model {
  id?: number;
  email: string;
  password: string;
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
  }
});

export default User;
