import React, { useEffect } from "react";
import { Container, Button } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "components";
import { characters } from "api/characters";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    characters
      .getById({ id: 1 })
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola Mundo"
        description="Hola mundo bienvenido a esta página"
        element={
          <Button fullWidth variant="contained">
            Hola Mundo
          </Button>
        }
      />
    </Container>
  );
};
