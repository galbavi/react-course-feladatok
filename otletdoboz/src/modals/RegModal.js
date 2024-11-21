import {Button, Dialog, DialogContent, DialogTitle, Grid2, Paper, Typography} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'
import SubmitButton from "../components/SubmitButton";

export default function RegModal() {
    return (<Dialog open={true}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
            <br/>
            <Formik initialValues={{}}>
                <Form>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12}>
                            <Field component={TextField} name="username" label="Username" type="text" fullWidth/>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Field component={TextField} name="password" label="Password" type="password" fullWidth/>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Field component={SubmitButton} label={"Do the registration"}/>
                        </Grid2>
                    </Grid2>
                </Form>
            </Formik>
        </DialogContent>
    </Dialog>)
}