import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
export default function Guest({ children }) {
    const { flash } = usePage().props;
    console.log(flash);
    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <Toaster />
            {children}
        </div>
    );
}
