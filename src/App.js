import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { RestrictRoute, routes } from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { GlobalStyles, lightTheme } from "./styles";
import Projects from "./components/Projects/Projects";
import Project from "./screens/Project";
import Profile from "./screens/Profile";
import NewProject from "./screens/NewProject";
//import { getUserData } from "./utills";

function App() {
  //임시, Login.js에서 로그인 성공시 새로고침하며 홈으로, userBar에서 로그아웃시 새로고침하며 홈으로.
  const isLoggedIn = Boolean(localStorage.getItem("user"));
  const userData = isLoggedIn ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Router>
            <Header isLoggedIn={isLoggedIn} userData={isLoggedIn && userData} />
            <Switch>
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
              <Route path={routes.newProject} exact>
                {isLoggedIn ? (
                  <NewProject isLoggedIn={isLoggedIn} userData={userData} />
                ) : (
                  <Redirect to={routes.home} />
                )}
              </Route>
              <Route path={`${routes.user}/:userId`} exact>
                <Profile isLoggedIn={isLoggedIn} />
              </Route>
              <Route path={`${routes.projects}/:projectId`} exact>
                <Project isLoggedIn={isLoggedIn} />
              </Route>
              <Route path={routes.home}>
                <Home isLoggedIn={isLoggedIn}>
                  <Projects />
                </Home>
              </Route>
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
