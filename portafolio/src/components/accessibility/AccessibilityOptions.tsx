import { useState, useRef, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { colors } from "../../data/colors";
import useColorMode from "../../hooks/useColorMode";
import { nanoid } from "nanoid";
import MaterialSwitch from "../UI/MaterialSwitch";
import {
  Box,
  Divider,
  Paper,
  Typography,
  FormControlLabel,
} from "@mui/material";

const AccessibilityOptions: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>();
  const { setPrimaryColor, setMode, mode } = useColorMode();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showOptions &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef, showOptions]);

  const handleColorModeToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "fixed",
        top: "30%",
        transition: "left 0.3s ease-in-out",
        left: showOptions ? 0 : -185,
        display: "flex",
      }}
    >
      <Paper
        variant="outlined"
        sx={{ padding: 1.3, boxShadow: "0 0 8px rgba(0,0,0,.15)", width: 185 }}
      >
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
        >
          MAIN COLOR
        </Typography>
        <Divider />
        <Box>
          {colors.map((color) => (
            <Box
              key={nanoid()}
              onClick={() => setPrimaryColor(color)}
              sx={{
                height: 20,
                width: 20,
                backgroundColor: color,
                display: "inline-block",
                margin: 0.75,
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
        <Divider />
        <FormControlLabel
          control={
            <MaterialSwitch
              checked={mode === "dark"}
              onChange={handleColorModeToggle}
              sx={{ my: 1 }}
            />
          }
          label={
            <Typography variant="subtitle2" color="text.secondary">
              COLOR MODE
            </Typography>
          }
        />
      </Paper>
      <Paper
        onClick={() => setShowOptions((prev) => !prev)}
        variant="outlined"
        sx={{
          py: 2,
          boxShadow: "0 0 8px rgba(0,0,0,.15)",
          width: "45px",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          height: "49px",
        }}
      >
        <SettingsIcon
          sx={{ fontSize: 15, animation: "spin 2s infinite linear" }}
        />
      </Paper>
    </Box>
  );
};

export default AccessibilityOptions;
