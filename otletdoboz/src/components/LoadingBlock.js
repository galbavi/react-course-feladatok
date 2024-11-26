import { Grid2, LinearProgress } from "@mui/material";

export function LoadingBlock() {
    return (
        <Grid2 container spacing={2}>
            <br />
            <Grid2 xs={12}>
                <LinearProgress />
            </Grid2>
        </Grid2>
    );
}