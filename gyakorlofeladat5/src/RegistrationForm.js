import { Button, Grid2, Typography } from "@mui/material";
import { Field, Form, Formik, useFormikContext } from "formik";
import { TextField } from "formik-mui";
import validator from "validator";

const usernameValidate = (value) => {
  if (value.length < 3) {
    return "Username must be at least 3 characters";
  }
  if (value.length > 20) {
    return "Username must be at most 20 characters";
  }
  if (!validator.isAlphanumeric(value, "en-US", { ignore: "_" })) {
    return "Username must be alphanumeric";
  }
};

const emailValidate = (value) => {
  if (!validator.isEmail(value)) {
    return "Invalid email";
  }
};

const passwordValidate = (value) => {
  if (value.length < 5) {
    return "Password must be at least 5 characters";
  }
  if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[A-Z]/.test(value)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[0-9]/.test(value)) {
    return "Password must contain at least one number";
  }
  if (validator.contains(value, "password", { ignoreCase: true })) {
    return "Password must not contain the word 'password'";
  }
};

const registrationValidate = (values) => {
  const errors = {};

  if (values.password !== values.passwordagain) {
    errors.passwordagain = "Passwords do not match";
  }

  return errors;
};

const RegistrationData = () => {
  const { values, errors } = useFormikContext();

  if (Object.keys(errors).length > 0) {
    return null;
  }

  return (
    <Typography variant="h6">
      Email: {values.email}
      <br />
      Password: {values.password}
    </Typography>
  );
};

export const RegistrationForm = () => {
  return (
    <Grid2 size={{ xs: 6 }}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordagain: "",
        }}
        onSubmit={() => {}}
        validate={registrationValidate}
      >
        <Form>
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12 }}>
              <RegistrationData />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="h4">Registration</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Field
                name="username"
                type="text"
                component={TextField}
                validate={usernameValidate}
                label="Username"
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Field
                name="email"
                type="email"
                component={TextField}
                validate={emailValidate}
                label="Email"
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Field
                name="password"
                type="password"
                component={TextField}
                validate={passwordValidate}
                label="Password"
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Field
                name="passwordagain"
                type="password"
                component={TextField}
                label="Password again"
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Button type="submit">Submit</Button>
            </Grid2>
          </Grid2>
        </Form>
      </Formik>
    </Grid2>
  );
};
