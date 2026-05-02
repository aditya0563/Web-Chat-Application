import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
function Otheruser(props) {
  const user = props.user;
  const {onlineUsers} = useSelector(store => store.user);
  const isOnline = onlineUsers.includes(user._id);

  const dispatch = useDispatch();

  const selectedUserHandler = (user) =>{
    dispatch(setSelectedUser(user))
  }
  return (
    <div>
      <div onClick={() => selectedUserHandler(user)} className="flex gap-3 items-center hover:bg-white/10 rounded p-2 py-3 cursor-pointer transition-all duration-200 group">
        {/* Avatar Section */}
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img
              src={user?.profilePhoto}
              alt="user-profile"
            />
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-slate-100 group-hover:text-white transition-colors">
              {user?.fullname}
            </p>
            {/* Added a subtle status or time icon for extra beauty */}
            <span className="text-xs text-slate-400">12:45 PM</span>
          </div>
          <p className="text-xs text-slate-300 truncate w-32">Online</p>
        </div>
      </div>

      {/* Cleaner Divider */}
      <div className="divider my-0 py-0 h-1 opacity-20"></div>
    </div>
  );
}

export default Otheruser;
