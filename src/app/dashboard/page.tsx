import type { Metadata } from "next";
import { config } from "@/config";

export const metadata = { title: `Dashboard | ${config.site.name}` } satisfies Metadata;

const DashboardPage = () => {
    return <>DashboardPage</>;
};

export default DashboardPage;
