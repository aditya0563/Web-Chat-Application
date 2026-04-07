import React, { useEffect } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setOtherUsers } from '../redux/userSlice';

function useGetOtherUsers() {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchOthers = async () => {
        
        try {
            axios.defaults.withCredentials = true
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/get-other-users`)
            dispatch(setOtherUsers(res.data))
            
        } catch (error) {
            console.log("axios error : ");
            
            console.log(error);
            
        }
    }
    fetchOthers();
  }, [])
}

export default useGetOtherUsers