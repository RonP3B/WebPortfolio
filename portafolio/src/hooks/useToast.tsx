import { toast } from "react-toastify";
import useColorMode from "./useColorMode";

const useToast = () => {
  const { mode } = useColorMode();

  const showToast = (message: string, options: object = {}) => {
    const toastOptions = {
      ...options,
      theme: mode,
    };

    toast(message, toastOptions);
  };

  return showToast;
};

export default useToast;
