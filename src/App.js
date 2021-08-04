import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { routes } from "./routes";
import Home from "./screens/Home";
import Project from "./screens/Project";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  //로그인상태
  const isLoggedIn = false;

  return (
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <GlobalStyles />
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.project} exact>
              <Project />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
