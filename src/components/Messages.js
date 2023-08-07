import React, { useContext, useState, useEffect } from "react";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { onSnapshot } from "firebase/firestore";
export default function Messages() {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  console.log("messages: ", messages);
  return (
    <div className="messages">
      {messages?.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}
