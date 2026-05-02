import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

function Messages() {
  // useGetMessages();
  useGetRealTimeMessage()
  const { messages } = useSelector((store) => store.message);

  if (!messages) {
    return;
  }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        messages && messages?.map((message, index) => {
          return(
            <Message key={index} message={message}/>
          )
        })
      }
    </div>
  );
}

export default Messages;
