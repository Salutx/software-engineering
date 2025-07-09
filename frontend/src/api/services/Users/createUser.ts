import { User, UserRegisterPayload } from "@/types/Users.types";
import ServiceAPI from "../../ServiceAPI";

export default async function createUser(
  payload: UserRegisterPayload
): Promise<User> {
  try {
    const response = await ServiceAPI.post<User>("/users/register/", payload);
    if (response.status !== 201) {
      throw new Error("Failed to create user");
    }

    return response.data;
  } catch (error) {
    throw error
  }
}
