import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import AppButton from "../../shared/components/app-button/AppButton";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Login</Typography>
        <br />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length <= 4) {
              errors.password = "Needs to be more than 4 characters";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            navigate("/classes");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={12}>
                  <AppTextInput
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errorText={errors.email && touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <AppTextInput
                    name="password"
                    type="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    errorText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <AppButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                    btnText="Sign in"
                  />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  },
  form: {
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

export default LoginPage;
