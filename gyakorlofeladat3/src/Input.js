import {
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

export const InputPaper = () => {
  return (
    <Paper elevation={5}>
      <Grid2 container spacing={2} padding="12px">
        <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            id="equipment"
            label="Equipment"
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="taken-by-select-label">Taken By</InputLabel>
            <Select labelId="taken-by-select-label" label="Taken By">
              <MenuItem value="Máté">Máté</MenuItem>
              <MenuItem value="Bettina">Bettina</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
          <TextField
            fullWidth
            variant="outlined"
            id="subject"
            label="Subject"
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
          <Button fullWidth variant="contained">
            ADD NEW IMAGE
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 6, lg: 6 }}>
          <Button fullWidth variant="contained" color="error">
            CANCEL
          </Button>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
