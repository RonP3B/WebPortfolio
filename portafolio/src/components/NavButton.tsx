import { Typography, Theme } from "@mui/material";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { NavButtonProps } from "../interfaces/componentProps/navButtonProps";

const NavButton: React.FC<NavButtonProps> = ({
  link,
  text,
  isDialog,
  active,
}) => {
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
        color: active ? (theme: Theme) => theme.palette.primary.main : "#000",
        fontWeight: "bold",
        transition: "all ease 0.3s",
        "&:hover": {
          color: (theme: Theme) => theme.palette.primary.main,
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default NavButton;
