import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNotification } from "context/notification.context";
import { LoginValidate } from "helpers/utils/validateForm";

type loginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [loginData, setLoginData] = useState<loginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={dataLogin}
              />
              <TextField
                name="password"
                margin="normal"
                type="Password"
                fullWidth
                label="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={dataLogin}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
