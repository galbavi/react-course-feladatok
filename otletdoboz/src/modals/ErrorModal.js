import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography} from "@mui/material";

export default function ErrorModal({onClose, message}) {
    return (<Dialog open={true} onClose={onClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
            <Typography variant={"body1"}>
                {message}
            </Typography>
        </DialogContent>
    </Dialog>)
}