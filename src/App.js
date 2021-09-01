import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import useUser from "./hooks/useUser";
import { RestrictRoute, routes } from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { GlobalStyles, lightTheme } from "./styles";
import Projects from "./components/Projects/Projects";
import Project from "./screens/Project";

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
              <Route path="/projects/:projectId/" exact>
                <Project />
              </Route>
              <Route path="/">
                <Home>
                  <Projects />
                </Home>
              </Route>
              <RestrictRoute
                component={SignUp}
                path={routes.signUp}
                isLoggedIn={isLoggedIn}
                exact
              />
              <RestrictRoute
                component={Login}
                path={routes.login}
                isLoggedIn={isLoggedIn}
                exact
              />
              <Route>
                <div>Not Found</div>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
