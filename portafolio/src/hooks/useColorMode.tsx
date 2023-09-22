import { useContext } from "react";
import ColorModeContext, {
  ColorModeContextProps,
} from "../contexts/ColorModeContext";

const useColorMode = (): ColorModeContextProps => {
  const colorMode = useContext(ColorModeContext);

  if (!colorMode) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return colorMode;
};

export default useColorMode;
