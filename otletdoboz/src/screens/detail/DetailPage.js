import { Button, Grid2, Typography } from "@mui/material";
import UserList from './components/UserList'
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../../hooks/useApi";
import { LoadingBlock } from "../../components/LoadingBlock";

export default function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [suggestion, loading, error] = useApi(AXIOS_METHOD.GET, `/suggestion/${id}`);

    if(loading === false && error !== false) {
        navigate('/'); // redirect to home page
        return null;
    }

    if (loading === true) {
        return <LoadingBlock />;
    }

    return <Grid2 container spacing={2}>
        <br />
        <Grid2 xs={12}>
            <Typography variant={"h4"}>{suggestion?.title}</Typography>
        </Grid2>
        <Grid2 xs={12}>
            {suggestion?.description.split("\n").map(line => {
                return <Typography variant={"body1"}>{line}</Typography>
            })}
        </Grid2>
        <Grid2 xs={12}>
            <UserList users={suggestion?.likes || []} />
        </Grid2>
        <Grid2 xs={12}>
            <Button variant={"outlined"} fullWidth>Like / Unlike</Button>
        </Grid2>
    </Grid2>
}