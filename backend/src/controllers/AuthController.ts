import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) return res.status(409).json({ message: 'Usuário já existe' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });

  return res.status(201).json({ message: 'Usuário criado', user: { email: user.email } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Senha inválida' });

  return res.status(200).json({ message: 'Login bem-sucedido' });
};
