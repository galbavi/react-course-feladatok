import { Button, Dialog, DialogContent, DialogTitle, Grid2, Paper, Typography } from "@mui/material";
import { Form, Formik, Field } from "formik";
import { TextField } from 'formik-mui'
import SubmitButton from "../components/SubmitButton";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export default function RegModal({ onClose }) {
    const { handleLoginResult } = useAuth();
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
            <br />
            <Formik initialValues={{}} onSubmit={(value, { setFieldError, setSubmitting }) => {
                setSubmitting(true);
                const onFailure = (apiError) => {
                    setFieldError('password', apiError);
                    setSubmitting(false);
                };
                doApiCall(AXIOS_METHOD.POST, "/reg", (_unusedRegData) => {
                    doApiCall(AXIOS_METHOD.POST, "/login", (data) => {
                        handleLoginResult(data);
                        setSubmitting(false);
                        onClose();
                    }, onFailure, value);
                    onClose();
                }, onFailure, value);
            }}>
                <Form>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12}>
                            <Field component={TextField} name="name" label="Username" type="text" fullWidth />
                        </Grid2>
                        <Grid2 xs={12}>
                            <Field component={TextField} name="password" label="Password" type="password" fullWidth />
                        </Grid2>
                        <Grid2 xs={12}>
                            <Field component={SubmitButton} label={"Do the registration"} />
                        </Grid2>
                    </Grid2>
                </Form>
            </Formik>
        </DialogContent>
    </Dialog>)
}