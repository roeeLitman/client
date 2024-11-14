import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const  user  = useAppSelector((state) => state.user.user);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>login</h1>
            <div>
                <input type="text" />
                <input type="text" />
                <select onChange={(e) => setNameOrganization(e.target.value)}>
                    <option value=""></option>
                </select>
                {nameOrganization === "IDF" && (
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
