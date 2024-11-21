import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddSuggestion() {
  const navigate = useNavigate();
  return (
    <Grid2 xs={12} md={4} lg={3}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant={"h4"}>New suggestion</Typography>
          <Typography variant={"body1"}>
            If you have a great idea, add it!
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant={"outlined"}
            fullWidth
            onClick={() => {
                navigate(`/new`);
              }}
          >
            Add new suggestion
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}
