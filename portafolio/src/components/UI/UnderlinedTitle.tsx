import { Box, Typography } from "@mui/material";

const UnderlinedTitle: React.FC<UnderlinedTitleProps> = ({ title }) => {
  return (
    <Box
      sx={{ display: "inline-block", position: "relative", padding: "0 3px" }}
    >
      <Box
        component="span"
        sx={{
          position: "absolute",
          height: "7px",
          width: "100%",
          bottom: "2px",
          opacity: "0.4",
          left: "0",
          backgroundColor: "primary.main",
        }}
      />
      <Typography component="h2" variant="h6">
        {title}
      </Typography>
    </Box>
  );
};

interface UnderlinedTitleProps {
  title: string;
}

export default UnderlinedTitle;
