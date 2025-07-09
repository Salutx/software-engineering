import { UserLoginPayload, UserSession } from "@/types/Users.types";
import ServiceAPI from "../../ServiceAPI";

export default async function loginUser({
  password,
  email,
}: UserLoginPayload): Promise<UserSession> {
  try {
    const response = await ServiceAPI.post<UserSession>(`/users/login`, {
      password,
      email,
    });
    if (response.status !== 200) {
      throw new Error("Failed to login user");
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw new Error("Error logging in user");
  }
}
