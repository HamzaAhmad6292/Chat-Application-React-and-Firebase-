import React, { useState } from "react";
import Signup from "./signup";
import { BrowserRouter, Link, Route, Switch, Routes } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { app, storage, db } from "../firebase";

import { doc, setDoc, getDoc } from "firebase/firestore";
const auth1 = getAuth();
const provider = new GoogleAuthProvider();
function Login(props) {
  const enterlogin = (event) => {};
  const [name, setname] = useState("o");
  const [Password, setpassword] = useState("o");

  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const gotoMain = () => {
    navigate("/main");
  };

  const emailchange = (event) => {
    setname(event.target.value);
  };

  const passwordchange = (event) => {
    setpassword(event.target.value);
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        // Extract the actual username from the email using regex
        const email = user.email;
        const username = email.match(/^[^@]+/)[0];

        // Set the display name using the actual username
        await updateProfile(user, {
          displayName: username,
          photoURL: user.photoURL,
        });

        // Check if the "userChats" document already exists
        const userChatsRef = doc(db, "userChats", user.uid);
        const userChatsDoc = await getDoc(userChatsRef);

        if (!userChatsDoc.exists()) {
          // Create a new document in the "users" collection with user data
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: username,
            email: user.email,
            photoURL: user.photoURL,
          });

          // Create an empty user chats document in the "userChats" collection
          await setDoc(userChatsRef, {});
        }

        setLoading(false);
        navigate("/main");
      })
      .catch((error) => {
        setErr(true);
        console.log(error);
        setLoading(false);
      });
  };

  const handleSbmit = async (e) => {
    const email = name;
    const password = Password;

    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/main");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-blue-200  h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-blue-500 border-blue-500 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded  text-black "
            onChange={emailchange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            A
            className="w-full border border-gray-300 px-4 py-2 rounded text-black"
            onChange={passwordchange}
          />
        </div>
        <button
          className="bg-blue-400 hover:bg-blue-500 focus:bg-blue-600 w-5/6 ml-4 rounded text-white py-3 px-6 font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleSbmit}
        >
          Login
        </button>
        <br />
        <br></br>
        <button
          onClick={handleLoginWithGoogle}
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            class="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            {" "}
            <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                {" "}
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  {" "}
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <span>Continue with Google</span>
        </button>
        <nav>
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/Signup"
          >
            Create New Account
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Login;
export { auth };
