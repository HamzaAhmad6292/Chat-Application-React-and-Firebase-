import React, { useState } from "react";
import Search from "./Search";

import Navbar from "./Navbar";
import Chats from "./Chats";

function Contacts({ selectUser, setSelectUser }) {
  return (
    <div className=" sidebar bg-[#333333]">
      <Navbar></Navbar>
      <Search setSelectUser={setSelectUser} selectUser={selectUser} />
      <Chats setSelectUser={setSelectUser} selectUser={selectUser} />
    </div>
  );
}

export default Contacts;
