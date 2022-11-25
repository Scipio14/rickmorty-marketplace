import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { CartComponent } from "./Cart";

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Codrr</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button variant="contained" onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};
