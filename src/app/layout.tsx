"use client";

import { PropsWithChildren } from "react";
import { DataProvider, ThemeProvider, NotificationProvider } from "shared/lib";
import { defaultHandler } from "shared/utils";
import "./globals.scss";

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
    <html lang="en">
        <body>
            <ThemeProvider>
                <NotificationProvider>
                    <DataProvider onError={defaultHandler.onError}>{children}</DataProvider>
                </NotificationProvider>
            </ThemeProvider>
        </body>
    </html>
);

export default RootLayout;
