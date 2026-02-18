import type { Metadata } from "next";
import { config } from "@/config";

export const metadata = { title: `Sign up | ${config.site.name}` } satisfies Metadata;

const SignUpPage = () => {
    return <>SignUp</>;
};

export default SignUpPage;
