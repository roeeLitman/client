import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchDetails } from "../../../redux/slise/organizationSlice";

export default function Details() {
    const user = useAppSelector((state) => state.organization.user);
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(fetchDetails());
        console.log(user);
    }, []);

    return (
        <div>
            <p>{user?.username}</p>
            {user?.detailsOnOrganization.resources.map((reso) => {
                return <p>{`${reso.name}: ${reso.amount}`}</p>;
            })}
            <select>
                <option value="IDF - North">North</option>
                <option value="IDF - West Bank">West Bank</option>
                <option value="IDF - Center">Center</option>
                <option value="IDF - South">South</option>
            </select>
            <button>Send missile</button>
        </div>
    );
}
