import React, { useEffect, useState } from "react";
import { Container, Button, Grid } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { CardComponent, HeaderComponent } from "components";
import { characters } from "api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allcharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        console.log(r.data.results);
        setAllCharacters(r.data.results);
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
      <div>
        {allcharacters?.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allcharacters!.map((character) => (
              <Grid item xs={3}>
                <CardComponent
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  key={character.id}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};
