import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Message({ message }) {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const scroll = useRef(null);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


const loggedInUserId = authUser?._id || authUser?.id;
const senderId = message?.senderId?._id || message?.senderId;
const isMe = String(senderId) === String(loggedInUserId);

  return (
    <div ref={scroll} className="p-2">
      <div className={`chat ${isMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ring ring-white/10 shadow-xl">
            <img
              alt="User avatar"
              src={isMe? authUser.profilePhoto : selectedUser.profilePhoto}
            />
          </div>
        </div>
        <div className="chat-header mb-1">
          <time className="text-[10px] text-slate-400 opacity-70">12:45 PM</time>
        </div>
        {/* Dynamic bubble color: Green for 'Me', Glass for 'Other' */}
        <div className={`chat-bubble backdrop-blur-md text-white border border-white/10 shadow-md ${
          isMe ? "bg-green-700" : "bg-white/10"
        }`}>
          {message?.message}
        </div>
      </div>
    </div>
  );
}

export default Message;