import {Grid2, Typography} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";

export default function UserPage() {
    return <Grid2 container spacing={2}>
        <Grid2 xs={12}>
            <Typography variant={"h6"}>Suggestions by alma:</Typography>
        </Grid2>
        <OneSuggestion/>
        <OneSuggestion/>
        <OneSuggestion/>
        <OneSuggestion/>
    </Grid2>
}