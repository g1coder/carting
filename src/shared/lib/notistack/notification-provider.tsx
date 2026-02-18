"use client";

import { PropsWithChildren } from "react";
import { SnackbarProvider } from "notistack";

export const NotificationProvider = ({ children }: PropsWithChildren) => {
    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            autoHideDuration={2000}
        >
            {children}
        </SnackbarProvider>
    );
};
