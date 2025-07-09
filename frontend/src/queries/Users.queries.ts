import createUser from "@/api/services/Users/createUser";
import loginUser from "@/api/services/Users/loginUser";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () =>
  useMutation({
    mutationFn: createUser,
    mutationKey: ["users", "createUser"],
  });

export const useLoginUser = () =>
  useMutation({
    mutationFn: loginUser,
    mutationKey: ["users", "loginUser"],
  });
