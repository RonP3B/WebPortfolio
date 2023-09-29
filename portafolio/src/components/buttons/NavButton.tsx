import { Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import useColorMode from "../../hooks/useColorMode";

const NavButton: React.FC<NavButtonProps> = ({
  link,
  text,
  isDialog,
  active,
}) => {
  const { mode } = useColorMode();

  return (
    <Typography
      key={nanoid()}
      variant="button"
      component={Link}
      to={link}
      sx={{
        margin: isDialog ? 0 : "0 10px",
        borderBottom: isDialog ? "solid 1px #efefef" : "none",
        textAlign: isDialog ? "center" : "left",
        padding: isDialog ? 2 : 0,
        textDecoration: "none",
        color: active ? "primary.main" : mode === "light" ? "#000" : "#fff",
        fontWeight: "bold",
        transition: "all ease 0.3s",
        "&:hover": { color: "primary.main" },
      }}
    >
      {text}
    </Typography>
  );
};

interface NavButtonProps {
  text: string;
  link: string;
  isDialog: boolean;
  active: boolean;
}

export default NavButton;
