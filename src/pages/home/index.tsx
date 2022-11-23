import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Button,
  Grid,
  CircularProgress,
  Box,
  Pagination,
} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { CardComponent, HeaderComponent } from "components";
import { characters } from "api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allcharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        console.log(r.data.results);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allcharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allcharacters!.map((character) => (
                  <Grid item xs={3}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      key={character.id}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              count={count}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
