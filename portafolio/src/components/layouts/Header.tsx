import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import RoundedButton from "../buttons/RoundedButton";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavButton from "../buttons/NavButton";
import { options } from "../../data/options";
import {
  Paper,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  Theme,
} from "@mui/material";

const Header: React.FC = () => {
  const location = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const theme: Theme = useTheme();
  const isScreenDown340px: boolean = useMediaQuery(theme.breakpoints.down(340));
  const isScreenUpSM: boolean = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleHireMeButton = () => {
    const mailtoLink = `mailto:roniell2016@hotmail.com?subject=${encodeURIComponent(
      "We're hiring you!"
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Paper
      sx={{
        mb: 3,
        height: "73px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          aria-label="Home Button"
          sx={{ height: "100%", width: "67.49px", mr: "10px" }}
        >
          <HomeIcon />
        </Button>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {options.map(({ text, link }) => (
          <NavButton
            key={nanoid()}
            text={text}
            link={link}
            isDialog={false}
            active={location.pathname === link}
          />
        ))}
      </Box>

      {!isScreenDown340px && (
        <Box
          onClick={handleHireMeButton}
          sx={{ marginLeft: "auto", marginRight: "18px" }}
        >
          <RoundedButton text="Hire Me" icon={<ContactMailRoundedIcon />} />
        </Box>
      )}

      <Box
        borderLeft={isScreenDown340px ? 0 : 1}
        height="100%"
        display={{ xs: "flex", sm: "none" }}
        alignItems="center"
        sx={{ borderLeftColor: "#eaeaea", marginLeft: "auto" }}
      >
        <IconButton
          onClick={handleDialogToggle}
          aria-label="Open Menu"
          sx={{ margin: "0px 14px" }}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Box>

      {!isScreenUpSM && (
        <Dialog
          open={isDialogOpen}
          onClose={handleDialogToggle}
          maxWidth="xs"
          fullWidth
        >
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", p: 0 }}
            onClick={handleDialogToggle}
          >
            {options.map(({ text, link }) => (
              <NavButton
                key={nanoid()}
                text={text}
                link={link}
                isDialog={true}
                active={location.pathname === link}
              />
            ))}
          </DialogContent>
        </Dialog>
      )}
    </Paper>
  );
};

export default Header;
