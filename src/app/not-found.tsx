import type { Metadata } from "next";
import { config } from "@/config";

export const metadata = { title: `Page 404 | ${config.site.name}` } satisfies Metadata;

const NotFoundPage = () => {
    return <div>404: The page you are looking for isn&apos;t here</div>;
};

export default NotFoundPage;
