import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User, { IUser } from "../models/User";

// Constants for bcrypt hashing
const SALT_ROUNDS = 10;

/**
 * Registers a new user in the system.
 * Validates the input data, checks for existing users, hashes the password,
 * @param req
 * @param res
 */
export const register = async (req: Request, res: Response) => {
  const { email, password, username } = req.body as IUser;

  // Check if email, password, and username are provided
  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "Email, senha e nome de usuário são obrigatórios" });
  }

  // Check if email and username are valid
  const existingEmail = await User.findOne({ where: { email } });

  if (existingEmail) {
    return res.status(409).json({ message: "Email já cadastrado" });
  }

  const existingUser = await User.findOne({ where: { username } });

  if (existingUser) {
    return res.status(409).json({ message: "Usuário já existe" });
  }

  // Hash the password before saving it to the database
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  // Create a new user in the database
  // Note: The User model should be defined in your models/User.ts file
  const user = await User.create({ email, password: hashed, username });

  // If user is successfully created, return a success message
  return res.status(201).json({
    message: "Usuário criado!",
    user: {
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
    },
  });
};

/**
 * Logs in a user by validating the email and password.
 * If the user exists and the password is correct, it returns a success message.
 * @param req
 * @param res
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  // Check if user exists
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

  // Compare the provided password with the stored hashed password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Senha inválida" });

  // If everything is valid, return a success message
  return res.status(200).json({ message: "Login bem-sucedido" });
};
