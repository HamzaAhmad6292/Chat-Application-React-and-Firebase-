import React, { useState, useContext } from "react";
import Login from "./login";
import Signup from "./signup";
import Main from "./main";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useSignInWithApple } from "react-firebase-hooks/auth";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login/" />;
    }
    return children;
  };

  console.log(currentUser);
  const [letuser, setletuser] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login letuser={letuser} setletuser={setletuser} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Signup />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
