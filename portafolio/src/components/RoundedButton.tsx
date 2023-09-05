import { Button } from "@mui/material";
import { RoundedButtonProps } from "../interfaces/componentProps/roundedButtonProps";

const RoundedButton: React.FC<RoundedButtonProps> = ({ icon, text }) => {
  return (
    <Button
      variant="contained"
      endIcon={icon}
      sx={{
        textTransform: "none",
        borderRadius: 8,
        margin: "1rem auto",
      }}
    >
      {text}
    </Button>
  );
};

export default RoundedButton;
