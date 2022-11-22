import { characters } from "api/characters";
import { TypeCharacter } from "pages/character/interface/character.interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<TypeCharacter | null>(null);
  useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [characters]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          {loading ? (
            <Box sx={{ displa: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <Typography variant="h2">{character!.name}</Typography>
                <Divider />
                <Typography variant="h6">{character!.origin.name}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip
                    color={character!.status === "Alive" ? "success" : "error"}
                    variant="outlined"
                    label={character!.status}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={character!.image}
                  style={{ width: "100%", borderRadius: "0.5em" }}
                  alt={character!.name}
                />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};
