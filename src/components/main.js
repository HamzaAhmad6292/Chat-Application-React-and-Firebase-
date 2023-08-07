import React, { useState, useEffect } from "react";
import Contacts from "./contacts";
import { FiArrowLeft } from "react-icons/fi";
import Chat_box from "./chat_box";
import Message from "./Message";

function Main() {
  const [selectUser, setSelectUser] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value based on the window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobileView);
  console.log("selection:", selectUser);
  return (
    <div className="home">
      <div className="container">
        {isMobileView ? (
          selectUser ? (
            <Chat_box
              setSelectUser={setSelectUser}
              selectUser={selectUser}
            ></Chat_box>
          ) : (
            <Contacts
              setSelectUser={setSelectUser}
              selectUser={selectUser}
            ></Contacts>
          )
        ) : (
          <>
            <Contacts
              setSelectUser={setSelectUser}
              selectUser={selectUser}
            ></Contacts>
            <Chat_box
              setSelectUser={setSelectUser}
              selectUser={selectUser}
            ></Chat_box>
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
