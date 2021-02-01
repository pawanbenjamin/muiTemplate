import { createMuiTheme } from "@material-ui/core/styles";

const pBlue = "#0B72B9";
const pOrgane = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${pBlue}`,
      orange: `${pOrgane}`,
    },
    primary: {
      main: `${pBlue}`,
    },
    secondary: {
      main: `${pOrgane}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
