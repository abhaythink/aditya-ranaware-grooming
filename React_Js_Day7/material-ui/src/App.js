import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone.This is photo album and trying to create page using
              material ui. I am using components for see how does components
              works and how to see on screen.
            </Typography>
          </Container>
          <Toolbar>
            <Container maxWidth="lg" align="center">
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>

              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
              </Fab>
              <Fab disabled aria-label="like">
                <FavoriteIcon />
              </Fab>
            </Container>
          </Toolbar>
        </div>
      </main>
    </>
  );
}

export default App;
