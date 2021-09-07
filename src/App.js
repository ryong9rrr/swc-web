import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
import Profile from "./screens/Profile";
import NewProject from "./screens/NewProject";

function App() {
  //로그인상태
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시
  const logout = () => setIsLoggedIn(false);
  //로그인한 유저 데이터
  const userData = useUser(isLoggedIn);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Router>
            <Header
              isLoggedIn={isLoggedIn}
              userData={isLoggedIn && userData}
              logout={logout}
            />
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
                <Profile />
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
