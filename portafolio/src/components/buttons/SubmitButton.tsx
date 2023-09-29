import { Button, CircularProgress } from "@mui/material";

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { loading, text, loadingText } = props;

  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        opacity: loading ? 0.5 : 1,
        borderRadius: 8,
        mt: 2,
        ...(loading && { pointerEvents: "none" }),
      }}
    >
      {loading && (
        <CircularProgress
          size={17}
          color="inherit"
          sx={{ marginRight: 0.55 }}
        />
      )}
      {loading ? loadingText : text}
    </Button>
  );
};

interface SubmitButtonProps {
  loading: boolean;
  text: string;
  loadingText: string;
}

export default SubmitButton;
