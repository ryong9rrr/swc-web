import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import useUser from "./hooks/useUser";
import { RestrictRoute, routes } from "./routes";
import Home from "./screens/Home";
import Project from "./screens/Project";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  //로그인상태
  const isLoggedIn = false;
  const userData = useUser(isLoggedIn);

  return (
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <GlobalStyles />
          <Route>
            <Header isLoggedIn={isLoggedIn} userData={isLoggedIn && userData} />
          </Route>
          <Switch>
            <Route component={Home} path={routes.home} exact />
            <Route component={Project} path={routes.project} exact />
            <RestrictRoute
              component={SignUp}
              path={routes.signUp}
              isLoggedIn={isLoggedIn}
              exact
            />
            <RestrictRoute
              component={SignIn}
              path={routes.signIn}
              isLoggedIn={isLoggedIn}
              exact
            />
            <Redirect to={routes.home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
