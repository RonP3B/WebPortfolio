import { Dispatch, SetStateAction } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import useToast from "./useToast";

const useContactFormik = (setSubmitting: Dispatch<SetStateAction<boolean>>) => {
  const showToast = useToast();

  const initialValues = { name: "", email: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name required"),
    email: Yup.string()
      .trim()
      .required("Email required")
      .matches(/^\S+@\S+\.\S+$/, "Invalid email format"),
    message: Yup.string().trim().required("Message required"),
  });

  const onSubmit = async (
    values: Record<string, unknown>,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setSubmitting(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      resetForm();

      showToast(`Hey ${values.name}! your message was successfully sent`, {
        type: "success",
      });
    } catch (error) {
      showToast("An error ocurred while trying to send your message", {
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { initialValues, validationSchema, onSubmit };
};

export default useContactFormik;
