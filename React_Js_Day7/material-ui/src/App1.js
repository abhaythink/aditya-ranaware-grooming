import React from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Breadcrumbs,
  Link,
  Alert,
  Box,
  Grid,
} from "@mui/material";

function App1() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "white",
        p: 4,
      }}
    >
      <Container>
        {/* Heading */}
        <Typography variant="h4" gutterBottom>
          Login Form
        </Typography>

        {/* Form */}
        <Box component="form" noValidate autoComplete="off" sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                placeholder="example@gmail.com"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
              <Typography variant="body2" sx={{ fontSize: 16, pt: 1 }}>
                We'll never share your email address. Trust us!
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                placeholder="password"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
              />
            </Grid>
          </Grid>

          <Button variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>

        {/* Card */}
        <Card sx={{ display: "flex", mb: 4 }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://picsum.photos/seed/picsum/200/100"
            alt="Example"
          />
          <CardContent>
            <Typography variant="h6">Card Example</Typography>
            <Typography>This is an example of a Material UI card.</Typography>
          </CardContent>
        </Card>

        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white", mb: 2 }}>
          <Link underline="hover" color="inherit" href="#">
            test1
          </Link>
          <Link underline="hover" color="inherit" href="#">
            test2
          </Link>
          <Typography color="text.primary">test3</Typography>
        </Breadcrumbs>

        {/* Alert */}
        <Alert severity="info">This is an info alert</Alert>

        {/* Button */}
        <Button variant="outlined" sx={{ mt: 2 }}>
          Test
        </Button>
      </Container>
    </Box>
  );
}

export default App1;
