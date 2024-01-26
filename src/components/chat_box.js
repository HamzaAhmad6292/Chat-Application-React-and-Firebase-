import React, { useContext } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Message from "./Message";
import Main from "./main";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";

function Chat_box({ setSelectUser }) {
  const { data } = useContext(ChatContext);
  const goback = () => {
    setSelectUser(false);
  };
  return (
    <div className="chat">
      <div className="chatInfo" >
        <button
          onClick={goback}
          className="flex items-center text-white hover:text-gray-300 transition-colors focus:outline-none"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>{" "}
        <span>{data.user?.displayName}</span>
        <div className="chatIcons"></div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
}

export default Chat_box;
