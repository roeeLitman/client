import React from 'react'
import { useAppSelector } from '../../../redux/store';

export default function Details() {
    const user = useAppSelector((state) => state.user.user);
        
  return (
    <div>
        <p>{user?.username}</p>
    </div>
  )
}
