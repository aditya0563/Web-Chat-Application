import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  if (!selectedUser?._id) return;

  const dispatch = useDispatch();
 useEffect(() => {
  if (!selectedUser?._id) return;

  const fetchMessages = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/message/get/${selectedUser._id}`
      );
      dispatch(setMessages(res.data?.messages || []))
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchMessages();
}, [selectedUser]);

};

export default useGetMessages;
