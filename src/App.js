import React from "react";
import { HelmetProvider } from "react-helmet-async";
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
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { GlobalStyles, lightTheme } from "./styles";

function App() {
  //로그인상태
  const isLoggedIn = false;
  //로그인한 유저 데이터
  const userData = useUser(isLoggedIn);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Router>
            <Header isLoggedIn={isLoggedIn} userData={isLoggedIn && userData} />
            <Switch>
              <Route component={Home} path={routes.home} />
              <RestrictRoute
                component={SignUp}
                path={routes.signUp}
                isLoggedIn={isLoggedIn}
              />
              <RestrictRoute
                component={Login}
                path={routes.login}
                isLoggedIn={isLoggedIn}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
