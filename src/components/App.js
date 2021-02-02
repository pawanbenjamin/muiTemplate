import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/header";
import Footer from "./ui/footer";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>Home</div>}
          />
          <Route exact path="/aboutus" component={() => <div>About Us</div>} />
          <Route exact path="/products" component={() => <div>Products</div>} />
          <Route exact path="/photos" component={() => <div>Photos</div>} />
          <Route exact path="/videos" component={() => <div>Videos</div>} />
          <Route
            exact
            path="/socialmedia"
            component={() => <div>Social Media</div>}
          />
          <Route exact path="/media" component={() => <div>Media</div>} />
          <Route
            exact
            path="/contactus"
            component={() => <div>Contact us</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div>Free Estimate</div>}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
