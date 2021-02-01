import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import swirl from "../../assets/swirl.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/": 
        if (value !== 0) {
          setValue(0);
        }
        break;
      
      case "/aboutus": 
        if (value !== 1) {
          setValue(1);
        }
        break;
      
      case "/products": 
        if (value !== 2) {
          setValue(2);
        }
        break;
      
      case "/media": 
        if (value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      
        if (value !== 4) {
          setValue(3);
          setSelectedIndex(1);
        }
        break;
      
      case "/videos": 
        if (value !== 5) {
          setValue(3);
          setSelectedIndex(2);
        }
        break;
      
      case "/socialmedia": 
        if (value !== 6) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;
      
      case "/contactus": 
        if (value !== 7) {
          setValue(4);
        }
        break;
      
      case "/estimate": 
        if (value !== 0) {
          setValue(5);
        }
        break;
      
      default:
        break;
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Media", link: "/media" },
    { name: "Photos", link: "/photos" },
    { name: "Videos", link: "/videos" },
    { name: "Socialmedia", link: "/socialmedia" },
  ];

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img
                alt="company-logo"
                src={swirl}
                className={classes.logo}
              ></img>
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/aboutus"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/products"
                label="Products"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(e) => handleClick(e)}
                className={classes.tab}
                component={Link}
                to="/media"
                label="Media"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contactus"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              // component={Link}
              // to="/estimate"
              // onClick={() => setValue(5)}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(e) => {
                    handleMenuItemClick(e, i);
                    setValue(3);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 3}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
