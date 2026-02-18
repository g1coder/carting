"use client";

import RouterLink from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Controller, useForm, UseFormSetError } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { publicRoute } from "shared/constants";
import { SignInValues, signInSchema } from "../lib";

interface SignInFormProps {
    onSubmit: (values: SignInValues, setErrors: UseFormSetError<SignInValues>) => void;
    isPending?: boolean;
    initialValues?: SignInValues;
}

export const SignInForm = ({ onSubmit, isPending, initialValues }: SignInFormProps) => {
    const [showPassword, setShowPassword] = useState<boolean>();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignInValues>({ defaultValues: initialValues, resolver: zodResolver(signInSchema) });

    return (
        <Stack spacing={4}>
            <Stack spacing={1} textAlign="center">
                <Typography variant="h4">Sign in</Typography>
                <Typography color="text.secondary" variant="body2">
                    Don&apos;t have an account?{" "}
                    <Link component={RouterLink} href={publicRoute.SIGN_UP} underline="hover" variant="subtitle2">
                        Sign up
                    </Link>
                </Typography>
            </Stack>
            <form onSubmit={handleSubmit((values) => onSubmit(values, setError))}>
                <Stack spacing={2}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <FormControl error={Boolean(errors.email)}>
                                <InputLabel>Email address</InputLabel>
                                <OutlinedInput {...field} label="Email address" type="email" />
                                {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null}
                            </FormControl>
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormControl error={Boolean(errors.password)}>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput
                                    {...field}
                                    endAdornment={
                                        showPassword ? (
                                            <VisibilityIcon cursor="pointer" onClick={() => setShowPassword(false)} />
                                        ) : (
                                            <VisibilityOffIcon cursor="pointer" onClick={() => setShowPassword(true)} />
                                        )
                                    }
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                />
                                {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
                            </FormControl>
                        )}
                    />
                    <div>
                        <Link component={RouterLink} href={publicRoute.RESET_PWD} variant="subtitle2" underline="hover">
                            Forgot password?
                        </Link>
                    </div>
                    {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
                    <Button disabled={isPending} type="submit" variant="contained">
                        Sign in
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};
