import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const  user  = useAppSelector((state) => state.user.user);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [loction, setloction] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const hendelInRegister = () => {
        dispatch(fetchRegister({
          username, password,
        }))
        navigate("/login");
    };

    useEffect(() => {
        if (user?._id) {
            navigate("/votes");
        }
    }, []);

    return (
        <div>
            <h1>login</h1>
            <div>
                <input placeholder="username" type="text" />
                <input placeholder="password" type="text" />
                <select onChange={(e) => setloction(e.target.value)}>
                    <option value="kjnk">hujn</option>
                    <option value="IDF">aaa</option>

                </select>
                {loction === "IDF" && (
                    <select>
                        <option>CENTER</option>
                        <option>NORTH</option>
                        <option>WEST</option>
                        <option></option>
                    </select>
                )}
            </div>
        </div>
    );
}
