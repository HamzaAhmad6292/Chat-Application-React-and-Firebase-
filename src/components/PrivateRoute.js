import React from "react";
import Login from "./login";

const PrivateRoute = ({ children, letuser }) => {
  // const username = localStorage.getItem("name");
  // const password = localStorage.getItem("password");
  // console.log({ username, password });
  // if ((username && password) || letuser == true) return children;
  // else return <Login />;
  return children;
};

export default PrivateRoute;
