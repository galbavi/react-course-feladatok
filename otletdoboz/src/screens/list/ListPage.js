import {Grid2, listItemIconClasses} from "@mui/material";
import OneSuggestion from "../../components/OneSuggestion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.post('https://otletdoboz.webuni.workers.dev/suggestions', {
            "author": "",
            "limit": 5,
            "cursor": ""
        }).then(response => {
            setList(response.data.suggestions);
        });
    }, [setList]);

    return <Grid2 container spacing={2}>
        {list.map((suggestion) => <OneSuggestion {...suggestion}/>)}
    </Grid2>
}