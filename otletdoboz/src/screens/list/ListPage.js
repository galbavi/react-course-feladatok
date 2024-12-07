import {Grid2, listItemIconClasses} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";
import { useEffect, useState } from "react";
import axios from "axios";
import { AXIOS_METHOD, useApi } from "../../hooks/useApi";
import { LoadingBlock } from "../../components/LoadingBlock";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
    const navigate = useNavigate();
    const [suggestionResult, loading, error ] = useApi(AXIOS_METHOD.POST, `/suggestions`, {
        "author": "",
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
        {suggestionResult.suggestions.map((suggestion) => <OneSuggestion {...suggestion}/>)}
    </Grid2>
}