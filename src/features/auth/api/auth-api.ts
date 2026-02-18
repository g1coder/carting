import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api, ErrorModel, SignInRequest, SignInResponse } from "shared/api";

export const useSignIn = (
    mutationOptions?: UseMutationOptions<Awaited<SignInResponse>, AxiosError<ErrorModel>, SignInRequest>
) => {
    return useMutation({
        mutationKey: ["sign-in"],
        mutationFn: async (variables: SignInRequest) => {
            return await api.post<SignInResponse>("/auth/sign-in", variables);
        },
        ...mutationOptions,
    });
};
