import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchLogin } from '../../redux/slise/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        if (!user?._id) return        
        navigate('/organization')
        console.log(user);

      }, [user]);

      useEffect(() => {
        if (user?._id) {
            console.log(user);

            navigate('/organization')
        }
      }, []);

  return (
    <div>
        <div>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username' type="text" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="text" />
            <button onClick={() => dispatch(fetchLogin({ username, password }) )} >login</button>
        </div>
    </div>
  )
}


