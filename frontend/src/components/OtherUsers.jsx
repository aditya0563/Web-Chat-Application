import React from 'react'
import Otheruser from './Otheruser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

function OtherUsers() {
  useGetOtherUsers();
  const {otherUsers} = useSelector(store => store.user);
  if(!otherUsers){
    return
  }
  return (
    <div className='overflow-auto'>
      {
        otherUsers?.map((user) => {
          return <Otheruser key={user._id} user={user}/>
        })
      }
    </div>
  )
}

export default OtherUsers;