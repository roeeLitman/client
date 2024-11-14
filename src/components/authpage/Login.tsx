import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';

export default function login() {
    
    const dispatch = useAppDispatch();
    const {  } = useAppSelector((state) => state.user);


    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  return (
    <div>
        <div>
            <input placeholder='username' type="text" />
            <input placeholder='password' type="text" />
            <button>login</button>
        </div>
    </div>
  )
}
