import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchLogin } from "../../redux/slise/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.user);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        if (!user) return;
        console.log(user);
        navigate("/organization");
    }, [user]);

    useEffect(() => {
        if (user?._id) {
            navigate("/organization");
        }
    }, []);

    return (
        <div>
            <h1>login</h1>
            <div>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    type="text"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type="text"
                />
                <button
                    onClick={() => dispatch(fetchLogin({ username, password }))}
                >
                    login
                </button>
                <NavLink to={"/register"}>register</NavLink>
            </div>
        </div>
    );
}
