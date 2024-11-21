import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AppMenu() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Suggestion Box
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/me");
            }}
          >
            My Suggestions
          </Button>
          <Button color="inherit">Logout</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Reg</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
