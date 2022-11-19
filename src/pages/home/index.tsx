import React from "react";
import { Container, Button } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "components";

export const HomePage: React.FC<{}> = () => {
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
