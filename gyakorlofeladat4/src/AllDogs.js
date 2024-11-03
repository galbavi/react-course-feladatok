import { Button, Container, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DogCard } from "./DogCard";
import { useData } from "./DataConext";

export const AllDogs = () => {
  const navigate = useNavigate();
  const { data, setData } = useData();

  const onDeleteDog = (id) => {
    let newDogs = data.filter((dog) => dog.id !== id);
    setData(newDogs);
  };

  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 3 }}>
          <Typography variant="h2">All Dogs</Typography>
        </Grid2>
        <Grid2 size={{ xs: 9 }} alignContent={"center"}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate("/new");
            }}
          >
            Add new Dog
          </Button>
        </Grid2>
        {data.map((dog) => {
          return <DogCard key={dog.id} dog={dog} onDeleteDog={onDeleteDog} />;
        })}
      </Grid2>
    </Container>
  );
};
