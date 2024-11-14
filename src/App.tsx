import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/authpage/Login";
import Register from "./components/authpage/Register";
import Organization from "./components/pages/organization/Organization";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/organization" element={<Organization />} />
                <Route path="/" element={<Navigate to={"/login"} />} />
            </Routes>
        </div>
    );
}
