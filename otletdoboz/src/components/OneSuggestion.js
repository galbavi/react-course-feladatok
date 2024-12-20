import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MODALS, useModals } from "../hooks/useModal";

export default function OneSuggestion({ id, title, description, onDelete }) {
  const navigate = useNavigate();
  const {showModal} = useModals();

  return (
    <Grid2 xs={12} md={4} lg={3}>
      <Card>
        <CardContent>
          <Typography variant={"h4"}>{title}</Typography>
          <Typography variant={"body1"}>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant={"outlined"}
            fullWidth
            onClick={() => {
              navigate(`/suggestion/${id}`);
            }}
          >
            Details
          </Button>
          <IconButton >
            <Favorite />
          </IconButton>
          { onDelete && <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>}
        </CardActions>
      </Card>
    </Grid2>
  );
}
