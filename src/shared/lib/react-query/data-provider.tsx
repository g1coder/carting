import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface DataProviderProps extends PropsWithChildren {
    onError?: (error: unknown) => void;
}

export const DataProvider = ({ children, onError }: DataProviderProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
            },
            mutations: {
                onError,
            },
        },
    });

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
