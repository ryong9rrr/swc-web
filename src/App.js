import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import Home from "./screens/Home";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <GlobalStyles />
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
