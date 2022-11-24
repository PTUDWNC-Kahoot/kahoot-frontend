import { Navigate } from "react-router-dom";
import React from "react";

function Dashboard() {
    const authenticated = localStorage.getItem("authenticated");

    if(authenticated == 'false') {
        return <Navigate replace to ="/login"/>

    }
    return (
        <div>
            <h1>
            Welcome to your Dashboard
            </h1>

           <a href="/editprofile">Edit Profile </a>
        </div>
    );
}
export default Dashboard;