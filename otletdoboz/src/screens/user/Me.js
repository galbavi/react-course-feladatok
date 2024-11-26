import {Grid2, Typography} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";
import { useAuth } from "../../hooks/useAuth";
import { LoadingBlock } from "../../components/LoadingBlock";
import { useNavigate, useParams } from "react-router-dom";
import { AXIOS_METHOD, useApi } from "../../hooks/useApi";

export default function UserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, userLoading, userError ] = useApi(AXIOS_METHOD.GET, `/user/${id}`);
    const [suggestions, suggestionsLoading, suggestionsError ] = useApi(AXIOS_METHOD.POST, `/suggestions`, {
        "author": `${user.id}`,
        "limit": 5,
        "cursor": ""
    });

    if (userLoading === false && suggestionsLoading === false && (userError !== false || suggestionsError !== false)) {
        navigate('/404'); // redirect to home page
        return null;
    }

    if (userLoading === true || suggestionsLoading === true) {
        return <LoadingBlock />;
    }

    return <Grid2 container spacing={2}>
        <Grid2 xs={12}>
            <Typography variant={"h6"}>Suggestions by {user.name}:</Typography>
        </Grid2>
        {suggestions.suggestions.map((suggestion) => <OneSuggestion {...suggestion}/>)}
    </Grid2>
}