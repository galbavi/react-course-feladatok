import {Grid2, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import SubmitButton from "../../components/SubmitButton";

export default function NewPage() {
    return <>
        <Typography variant={"h4"}>Add new suggestion</Typography>
        <br/>
        <Formik initialValues={{}}>
            <Form>
                <Grid2 container spacing={2}>
                    <Grid2 xs={12}>
                        <Field component={TextField} name="title" label="Title" type="text" fullWidth/>
                    </Grid2>
                    <Grid2 xs={12}>
                        <Field component={TextField} name="description" label="Description"
                               type="text" multiline fullWidth minRows={8}/>
                    </Grid2>
                    <Grid2 xs={12}>
                        <Field component={SubmitButton} label={"Publish suggestion"}/>
                    </Grid2>
                </Grid2>
            </Form>
        </Formik>
        </>
}