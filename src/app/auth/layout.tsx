import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100%", p: 2 }}>
            <Box sx={{ maxWidth: "450px", width: "100%" }}>{children}</Box>
        </Box>
    );
};

export default Layout;
