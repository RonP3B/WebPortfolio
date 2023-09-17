import { createContext, useState, useMemo, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext<ColorModeContextProps>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>("#1976D2");
  const [mode, setMode] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
      setPrimaryColor,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: primaryColor },
        },
      }),
    [mode, primaryColor]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export interface ColorModeContextProps {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

export default ColorModeContext;
