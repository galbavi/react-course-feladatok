import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const PhotoCard = ({ label, imagesrc }) => {
  return (
    <Card>
      <CardMedia component="img" image={imagesrc} />
      <CardContent>
        <Typography>{label}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">
          DETAILS
        </Button>
      </CardActions>
    </Card>
  );
};
