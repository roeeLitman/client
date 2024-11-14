import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchDetails } from "../../../redux/slise/organizationSlice";
import { socket } from "../../../main";

export default function Details() {
    const organization = useAppSelector((state) => state.organization.user);
    const user = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();
    const [loction, setloction] = useState("");
    const [missile, setMissile] = useState("");

    useEffect(() => {
        dispatch(fetchDetails());
        console.log(organization);
    }, []);

    const hendelNewAttack = ()=>{

        console.log(user);
        
        socket.emit("sendAttackMissile",{loction, missile, id_user: user.user_id, username: user?.username})
    }

    return (
        <div>
            <p>{organization?.username}</p>
            {organization?.detailsOnOrganization.resources.map((reso) => {
                return <button onClick={()=>{setMissile(reso.name)}} key={reso.name}>{`${reso.name}: ${reso.amount}`}</button>;
            })}
            {!organization?.detailsOnOrganization.name.includes("IDF")?
            <div>
                <select onChange={(e) => {setloction(e.target.value)}}>
                    <option value="IDF - North">North</option>
                    <option value="IDF - West Bank">West Bank</option>
                    <option value="IDF - Center">Center</option>
                    <option value="IDF - South">South</option>
                </select>
                <button onClick={hendelNewAttack}>Send missile</button>
            </div>:
            null }
        </div>
    );
}
