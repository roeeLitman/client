import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../../redux/slise/userSlice";

export default function Register() {
    const user = useAppSelector((state) => state.user.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loction, setloction] = useState("Hezbollah");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const hendelInRegister = () => {
        dispatch(
            fetchRegister({
                username,
                password,
                organizatio: loction,
            })
        );
        navigate("/login");
    };

    useEffect(() => {
        if (user?._id) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            <h1>REGISTER</h1>
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
                <select onChange={(e) => setloction(e.target.value)}>
                    <option value="Hezbollah">Hezbollah</option>
                    <option value="Hamas">Hamas</option>
                    <option value="IRGC">IRGC</option>
                    <option value="IRGC">IRGC</option>
                    <option value="IDF">IDF</option>
                </select>
                {loction === "IDF" && (
                    <select onChange={(e) => setloction(e.target.value)}>
                        <option value=" - North">North</option>
                        <option value=" - North">North</option>
                        <option value=" - West Bank">West Bank</option>
                        <option value=" - Center">Center</option>
                    </select>
                )}
                <button onClick={hendelInRegister}>register</button>
            </div>
        </div>
    );
}
