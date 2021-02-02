import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import swirl from "../../assets/swirl.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  footerLogo: {
    height: "5em",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  mainContainer: {
    position: "absolute",
    marginTop: ".3em",
  },
  link: {
    fontSize: "0.75rem",
    fontWeight: "bold",
    opacity: ".7",
    textDecoration: "none",
    color: "black",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
        spacing={2}
      >
        <Grid item className={classes.link}>
          <Grid container direction="column">
            <Grid component={Link} to="/" item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid component={Link} to="/aboutus" item className={classes.link}>
              About Us
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid component={Link} to="/products" item className={classes.link}>
              Products
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid component={Link} to="/media" item className={classes.link}>
              Media
            </Grid>
            <Grid component={Link} to="/photos" item className={classes.link}>
              Photos
            </Grid>
            <Grid component={Link} to="/videos" item className={classes.link}>
              Videos
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid
              component={Link}
              to="/contactus"
              item
              className={classes.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img alt="logo" src={swirl} className={classes.footerLogo} />
    </footer>
  );
}
