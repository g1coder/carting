"use client";

import { useRouter } from "next/navigation";
import { UseFormSetError } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { SignInValues } from "features/auth/lib";
import { useSignIn } from "features/auth/api/auth-api";
import { privateRoute } from "shared/constants";
import { applyValidationErrors } from "shared/utils";
import { SignInForm } from "./sign-in-form";

const defaultValues = { email: "guest@mail.com", password: "Secret1" } satisfies SignInValues;

export const SignIn = () => {
    const router = useRouter();
    const signIn = useSignIn({
        onSuccess: () => {
            router.push(privateRoute.MAIN);
        },
    });

    const onSubmit = (values: SignInValues, setError: UseFormSetError<SignInValues>) => {
        signIn.mutate(values, {
            onError: (error) => {
                applyValidationErrors(error, setError, true);
            },
        });
    };

    return (
        <>
            <SignInForm onSubmit={onSubmit} initialValues={defaultValues} />;
            <Alert color="warning">
                Use{" "}
                <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
                    {defaultValues.email}
                </Typography>{" "}
                with password{" "}
                <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
                    {defaultValues.password}
                </Typography>
            </Alert>
        </>
    );
};
