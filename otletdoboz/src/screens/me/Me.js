import {Grid2} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";
import AddSuggestion from "./components/AddSuggestion";

export default function MePage() {
    return <Grid2 container spacing={2}>
        <OneSuggestion/>
        <OneSuggestion/>
        <OneSuggestion/>
        <OneSuggestion/>
        <AddSuggestion/>
    </Grid2>
}