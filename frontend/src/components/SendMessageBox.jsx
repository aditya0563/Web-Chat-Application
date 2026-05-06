import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setMessages } from '../redux/messageSlice';

function SendMessageBox() {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const {selectedUser} = useSelector(store => store.user)
    const {messages} = useSelector(store => store.message)
    const onSubmitHandler =async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/send/${selectedUser?._id}`, {message}, {
                withCredentials: true
            })
            dispatch(setMessages([...messages, res?.data?.message]))
            setMessage("");
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='px-4 my-3'>
        <form onSubmit={onSubmitHandler} className='relative flex items-center'>
            <input 
                type='text' 
                className='w-full p-3 pr-12 text-sm rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all'
                placeholder='Type a message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                type='submit' 
                className='absolute right-2 flex items-center justify-center w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 text-white transition-all group'
            >
                <IoSend className='group-hover:translate-x-0.5 transition-transform' />
            </button>
        </form>
    </div>
  )
}

export default SendMessageBox;// tweak input border radius
