import React, { useEffect } from "react";
import SendMessageBox from "./SendMessageBox";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer() {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[450px] flex flex-col h-full">
          {/* MATCHING HEADER */}
          <div className="flex gap-3 items-center bg-white/5 backdrop-blur-md px-4 py-3 border-b border-white/10">
            {/* Avatar Section (Matches Otheruser) */}
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={selectedUser.profilePhoto} alt="user-profile" />
              </div>
            </div>

            {/* User Info Section */}
            <div className="flex flex-col flex-1">
              <p className="font-bold text-slate-100">
                {selectedUser.fullname}
              </p>
              <p className="text-xs text-white">Online</p>
            </div>
          </div>
          <Messages />
          <SendMessageBox />
        </div>
      ) : (
        <div className="md:min-w-[450px] flex flex-col h-full justify-center items-center text-white select-none cursor-default">
          <div className="text-center bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
            <h1 className="text-4xl font-bold mb-2">
              Welcome,{" "}
              <span className="text-green-500">{authUser?.fullname}</span> 👋
            </h1>
            <p className="text-slate-300 text-lg">
              Select a chat to start messaging
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageContainer;
