import React, { useState } from "react";

export default function Register() {
    const [nameOrganization, setNameOrganization] = useState<string>("");

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
