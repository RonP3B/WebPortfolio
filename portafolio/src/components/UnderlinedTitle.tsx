import { Box, Theme, Typography } from "@mui/material";
import { UnderlinedTitleProps } from "../interfaces/componentProps/underlinedTitleProps";

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
          backgroundColor: (theme: Theme) => theme.palette.primary.main,
        }}
      />
      <Typography component="h2" variant="h6">
        {title}
      </Typography>
    </Box>
  );
};

export default UnderlinedTitle;
