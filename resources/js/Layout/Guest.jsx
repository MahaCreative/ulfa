import React from "react";
import Navbar from "../Components/Navbar";
export default function Guest({ children }) {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}
