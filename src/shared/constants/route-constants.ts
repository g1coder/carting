export const publicRoute = {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    RESET_PWD: "/auth/reset-password",
    HOME: "/",
} as const;

export const privateRoute = {
    MAIN: "/dashboard",
} as const;
