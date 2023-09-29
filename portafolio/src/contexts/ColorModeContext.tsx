import { createContext, useState, useMemo, ReactNode, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext<ColorModeContextProps>({
  setMode: () => {},
  setPrimaryColor: () => {},
  mode: "light",
});

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>(() => {
    const storedPrimaryColor = localStorage.getItem("primaryColor");
    return storedPrimaryColor || "#1976D2";
  });

  const [mode, setMode] = useState<"light" | "dark">(() => {
    const storedMode = localStorage.getItem("mode");
    return (
      (storedMode as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      setMode,
      setPrimaryColor,
      mode,
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
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
}

export default ColorModeContext;
