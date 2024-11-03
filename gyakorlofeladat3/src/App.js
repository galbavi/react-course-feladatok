import { Grid2, Container } from "@mui/material";
import "./App.css";
import { InputPaper } from "./Input";
import { TablePaper } from "./TablePaper";
import { PhotoCard } from "./PhotoCard";
import Picture1 from "./assets/picture1.jpg";
import Picture2 from "./assets/picture2.jpg";

const equipments = [
  { id: 1, equipment: "Canon EOS 6D Mark II", takenBy: "Joe", subject: "Tree" },
  {
    id: 2,
    equipment: "Canon EOS 6D Mark II",
    takenBy: "Joe",
    subject: "House",
  },
  { id: 3, equipment: "Pentax K-70", takenBy: "Mark", subject: "Old lady" },
];

const photos = [
  { id: 1, label: "Albanian Coast", src: Picture1 },
  { id: 2, label: "Albanian Nature", src: Picture2 },
];

function App() {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} padding="10px" bgcolor="gainsboro">
        <Grid2 size={{ xs: 12, md: 8, lg: 8 }}>
          <TablePaper equipments={equipments} />
          <InputPaper />
        </Grid2>
        <Grid2 container spacing={2} size={{ xs: 12, md: 4, lg: 4 }}>
          {photos.map((item) => {
            return (
              <Grid2 size={{ xs: 6, md: 12, lg: 12 }}>
                <PhotoCard label={item.label} imagesrc={item.src} />
              </Grid2>
            );
          })}
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
