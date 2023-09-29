import { Button } from "@mui/material";

const RoundedButton: React.FC<RoundedButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      endIcon={icon}
      onClick={onClick}
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

interface RoundedButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default RoundedButton;
