import { Box, Link, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        p: 3,
        mt: 2,
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography color="HighlightText">Roniell Pérez.</Typography>
      <Typography variant="body1" color="GrayText">
        © 2023{" "}
        <Link
          href="https://github.com/RonP3B/WebPortafolio"
          underline="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </Link>{" "}
        to see source code
      </Typography>
    </Box>
  );
};

export default Footer;
