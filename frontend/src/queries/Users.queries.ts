import createUser from "@/api/Users/createUser";
import loginUser from "@/api/Users/loginUser";
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
