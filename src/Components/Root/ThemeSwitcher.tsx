"use client";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Fab } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  return (
    <Fab
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      color="primary"
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      <LightModeIcon
        sx={(theme) => ({
          ...theme.applyStyles("light", {
            display: "none",
          }),
        })}
      />
      <DarkModeIcon
        sx={(theme) => ({
          ...theme.applyStyles("dark", {
            display: "none",
          }),
        })}
      />
    </Fab>
  );
}
