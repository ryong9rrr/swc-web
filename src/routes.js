import { Redirect } from "react-router-dom";

export const routes = {
  home: "/",
  project: "/project/",
  signUp: "/sign-up",
  signIn: "/sign-in",
};

export const RestrictRoute = ({ component: Component, path, isLoggedIn }) => {
  return isLoggedIn ? <Redirect to={routes.home} /> : <Component path={path} />;
};
