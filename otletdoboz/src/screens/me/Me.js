import {Grid2} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";
import AddSuggestion from "./components/AddSuggestion";
import { AXIOS_METHOD, useApi } from "../../hooks/useApi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LoadingBlock } from "../../components/LoadingBlock";

export default function MePage() {
    const {sessionUser} = useAuth();

    const navigate = useNavigate();
    const [suggestions, loading, error ] = useApi(AXIOS_METHOD.POST, `/suggestions`, {
        "author": `${sessionUser.id}`,
        "limit": 5,
        "cursor": ""
    });

    if(loading === false && error !== false) {
        navigate('/404'); // redirect to home page
        return null;
    }

    if (loading === true) {
        return <LoadingBlock />;
    }

    return <Grid2 container spacing={2}>
        {suggestions.suggestions.map((suggestion) => <OneSuggestion {...suggestion}/>)}
    </Grid2>
}