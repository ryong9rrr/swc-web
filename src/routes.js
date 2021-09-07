import { Redirect } from "react-router-dom";

export const routes = {
  home: "/",
  signUp: "/sign-up",
  login: "/login",
  skill: "/skill",
  projects: "/projects",
  newProject: "/new-project",
  user: "/user",
};

export const RestrictRoute = ({ component: Component, path, isLoggedIn }) => {
  return isLoggedIn ? <Redirect to={routes.home} /> : <Component path={path} />;
};
