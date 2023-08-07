import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar">
      <span className="logo">Chats</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button
          class="bg-blue-300 text-white px-1 py-1 font-bold rounded x1 cursor-pointer"
          onClick={() => {
            signout();
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}
