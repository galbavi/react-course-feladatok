import { Button, Grid2, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "./DataConext";

export const Dog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dog, setDog] = useState({ id: 0, name: "", imageURL: "" });
  const { data, setData } = useData();

  useEffect(() => {
    let dog = data.find((dog) => dog.id === parseInt(id));
    if (dog) {
      setDog(dog);
    }
  }, []);

  return (
    <Grid2 container spacing={2} padding="12px">
      <Grid2 size={{ xs: 12 }}>
        <Typography variant="h2">New Dog</Typography>
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          variant="outlined"
          id="name"
          label="Name"
          value={dog.name}
          onChange={(e) =>
            setDog((oldDog) => {
              return {
                id: oldDog.id,
                name: e.target.value,
                imageURL: oldDog.imageURL,
              };
            })
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextField
          fullWidth
          variant="outlined"
          id="image-url"
          label="Image URL"
          value={dog.imageURL}
          onChange={(e) =>
            setDog((oldDog) => {
              return {
                id: oldDog.id,
                name: oldDog.name,
                imageURL: e.target.value,
              };
            })
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
        <Button
          variant={"contained"}
          color="success"
          fullWidth
          onClick={() => {
            let newDogs = data.map((oldDog) => {
              if (oldDog.id === dog.id) {
                return dog;
              }
              return oldDog;
            });
            setData(newDogs);
            navigate("/");
          }}
        >
          Modify
        </Button>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
        <Button
          variant={"contained"}
          fullWidth
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </Grid2>
    </Grid2>
  );
};
