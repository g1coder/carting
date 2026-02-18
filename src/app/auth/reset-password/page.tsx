import type { Metadata } from "next";
import { config } from "@/config";

export const metadata = { title: `Password Recovery | ${config.site.name}` } satisfies Metadata;

const ResetPasswordPage = () => {
    return <>Reset password</>;
};

export default ResetPasswordPage;
