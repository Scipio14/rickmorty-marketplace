import { FC, useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "helpers/utils/localStorage";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};

export const CardComponent: FC<CardProps> = ({
  image,
  name,
  status,
  species,
  id,
}) => {
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const itemExists = useAppSelector((state) => state.cart);
  // console.log(itemExists);
  useEffect(() => {
    setDisabledBtn(itemExists.some((item) => item.id === id));
    setItem("cart", itemExists);
  }, [itemExists, id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status,
      })
    );
  };
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h4">
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disabledBtn}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
