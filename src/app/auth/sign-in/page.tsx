import type { Metadata } from "next";
import { config } from "@/config";
import { SignIn } from "features/auth";

export const metadata = { title: `Sign in | ${config.site.name}` } satisfies Metadata;

const SignInPage = () => {
    return <SignIn />;
};

export default SignInPage;
