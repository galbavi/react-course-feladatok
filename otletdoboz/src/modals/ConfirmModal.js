import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography} from "@mui/material";

export default function ConfirmModal() {
    return (<Dialog open={true}>
        <DialogTitle>Confirmation required</DialogTitle>
        <DialogContent>
            <Typography variant={"body1"}>
                Are you sure you want to delete this suggestion?
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button variant={"contained"} color={"error"}>Yes</Button>
            <Button variant={"outlined"}>No</Button>
        </DialogActions>
    </Dialog>)
}