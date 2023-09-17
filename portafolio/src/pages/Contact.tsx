import { useState } from "react";
import { Paper, Grid, Typography } from "@mui/material";
import UnderlinedTitle from "../components/UnderlinedTitle";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import useContactFormik from "../hooks/useContactFormik";
import SubmitButton from "../components/SubmitButton";
import { contactData } from "../data/contact";
import { nanoid } from "nanoid";
import Map from "../components/Map";

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { initialValues, validationSchema, onSubmit } =
    useContactFormik(setSubmitting);

  return (
    <Paper sx={{ padding: "38px 30px 45px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <UnderlinedTitle title="Contact Form" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form style={{ marginTop: "30px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <InputField
                      type="text"
                      name="name"
                      label="Name"
                      multiline={false}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      type="email"
                      name="email"
                      label="Email"
                      multiline={false}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      type="text"
                      name="message"
                      label="Message"
                      multiline={true}
                    />
                  </Grid>
                </Grid>
                <SubmitButton
                  text="Send"
                  loadingText="Sending..."
                  loading={submitting}
                />
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} md={6}>
          <UnderlinedTitle title="Contact Informations" />
          {contactData.map(({ title, val }) => (
            <Typography key={nanoid()} variant="body2" sx={{ mt: 3.2 }}>
              <strong>{title}</strong> {val}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <UnderlinedTitle title="Contact Map" />
          <Map />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
