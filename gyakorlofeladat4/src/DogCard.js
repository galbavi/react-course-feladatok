import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DogCard = ({ dog, onDeleteDog }) => {
  const navigate = useNavigate();

  return (
    <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
      <Card>
        <CardMedia component={"img"} image={dog?.imageURL} height={"150"} />
        <CardContent>
          <Typography variant="h4">{dog?.name}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant={"contained"}
            color={"primary"}
            fullWidth
            onClick={() => {
              navigate(`/dog/${dog.id}`);
            }}
          >
            Modify
          </Button>
          <Button
            variant={"contained"}
            color={"error"}
            fullWidth
            onClick={() => {
              onDeleteDog(dog?.id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};
