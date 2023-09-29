import TextField from "@mui/material/TextField";
import { useField } from "formik";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  multiline,
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      type={type}
      name={name}
      label={label}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      variant="standard"
      margin="dense"
      fullWidth
      multiline={multiline}
      rows={multiline ? 4 : undefined}
    />
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  multiline: boolean;
}

export default InputField;
