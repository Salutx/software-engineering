import { Router } from "express";
import { register, login } from "../controllers/AuthController";

/**
 * * Main router for authentication routes.
 */
const router = Router();

/**
 * * Registers a new user.
 * * @route POST /register
 * * @returns {Object} Success message and user details.
 *
 * * Logs in an existing user.
 * * @route POST /login
 * * @returns {Object} Success message and user details.
 * * @throws {Error} If email or password is missing or incorrect.
 */
router.post("api/users/register", register);
router.post("api/users/login", login);

export default router;
