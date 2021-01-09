import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16/9 aspect ratio "hack"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={product.media.source}
        title='placeholder'
        className={classes.media}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h6'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant='body2'
          color='textSecondary'
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Add to Cart'
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
