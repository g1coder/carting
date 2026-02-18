"use client";

import { PropsWithChildren } from "react";
import "./globals.scss";

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;
