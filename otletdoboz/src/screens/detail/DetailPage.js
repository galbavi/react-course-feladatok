import {Button, Grid2, Typography} from "@mui/material";
import UserList from './components/UserList'

export default function DetailPage() {
    return <Grid2 container spacing={2}>
        <br/>
        <Grid2 xs={12}>
            <Typography variant={"h4"}>Van egy ötletem...</Typography>
        </Grid2>
        <Grid2 xs={12}>
            <Typography variant={"body1"}>Lorem ipsum</Typography>
        </Grid2>
        <Grid2 xs={12}>
            <UserList/>
        </Grid2>
        <Grid2 xs={12}>
            <Button variant={"outlined"} fullWidth>Like / Unlike</Button>
        </Grid2>
    </Grid2>
}