import React from "react";
import { makeStyles } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import Pic1 from "../../../assets/Portrait_1.jpg";
import Pic2 from "../../../assets/Landscape_1.jpg";
import Pic3 from "../../../assets/Street_1.jpg";
import Pic4 from "../../../assets/Nature_1.jpg";
import Pic5 from "../../../assets/BW_1.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 12% 1rem 12%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 5% 1rem 5%",
    },
  },
  root: {
    // width: "20rem",
    borderRadius: "0",
  },
  media: {
    height: 200,
  },
  content: {
    padding: "1rem 0.8rem 0rem 0.8rem",
    minHeight: "6rem",
  },
}));
const items = [
  {
    name: "Portraits",
    src: Pic1,
    quotes: " “A mans manners are a mirror in which he shows his portrait.”",
    author: "Johann Wolfgang von Goethe",
    path: "/portraits",
  },
  {
    name: "Landscapes",
    src: Pic2,
    quotes:
      '"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."',
    author: "Marcel Proust",
    path: "/landscapes",
  },
  {
    name: "Street",
    src: Pic3,
    quotes: '"Failure is a detour, not a dead-end street."',
    author: "Zig Ziglar",
    path: "/street",
  },
  {
    name: "Nature",
    src: Pic4,
    quotes: '"Simplicity is natures first step, and the last of art."',
    author: "Philip James Bailey",
    path: "/nature",
  },
  {
    name: "Black&White",
    src: Pic5,
    quotes:
      '"Black and white creates a strange dreamscape that color never can."',
    author: "Jack Antonoff",
    path: "/blackandwhite",
  },
];
export default function Cateogary() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      className={classes.grid}
      container
      spacing={matches ? 4 : 6}
      direction="row"
      justifycontent="center"
      alignItems="center"
    >
      {items.map((value, index) => {
        return (
          <Grid item xs={12} sm={6} key={index}>
            <Paper className={classes.root} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component={Link}
                  to={value.path}
                  className={classes.media}
                  image={value.src}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {value.quotes}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    --- {value.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={value.path}
                >
                  Show More
                </Button>
              </CardActions>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
