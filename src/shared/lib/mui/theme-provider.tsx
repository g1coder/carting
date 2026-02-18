import { PropsWithChildren } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    cssVariables: true,
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};
