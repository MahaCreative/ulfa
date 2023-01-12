import { Link, usePage } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React, { useState } from "react";
import DropdownMenu from "../Components/DropdownMenu";
import Navbar from "../Components/Navbar";

export default function App({ profile, children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const {auth} = usePage().props
    const menuHandler = () => {
        setActive(!active);
        console.log(active);
    };
    return (
        <div className="overflow-x-hidden">
            <div className="flex">
                <div
                    className={clsx(
                        showSidebar ? "translate-x-0 " : "-translate-x-[800px]",
                        "top-0 left-0 w-[20vw] bg-emerald-500 text-white fixed h-full duration-300 ease-in-out transition z-[9999]"
                    )}
                >
                    <div className="flex gap-3 items-center bg-emerald-600 p-4">
                        <img src={"/images/lpp.png"} className="w-14" alt="" />
                        <h1 className="text-xl capitalize font-bold md:flex hidden">
                            {" "}
                            {profile
                                ? profile.nama
                                : "ikatan pelajar putri nahdatul ulama"}
                        </h1>
                    </div>
                    <div>
                        <Link
                            className="block bg-emerald-300 my-3 py-3 pl-2 hover:cursor-pointer border-y border-white/50 hover:bg-opacity-50"
                            href={route("beranda")}
                        >
                            Beranda
                        </Link>
                        <Link
                            className="block bg-emerald-300 my-3 py-3 pl-2 hover:cursor-pointer border-y border-white/50 hover:bg-opacity-50"
                            href={route("dashboard")}
                        >
                            Dashboard
                        </Link>
                        <Link
                            className="block bg-emerald-300 my-3 py-3 pl-2 hover:cursor-pointer border-y border-white/50 hover:bg-opacity-50"
                            href={route("anggota")}
                        >
                            Data Anggota
                        </Link>
                        <Link
                            className="block bg-emerald-300 my-3 py-3 pl-2 hover:cursor-pointer border-y border-white/50 hover:bg-opacity-50"
                            href={route("alumni")}
                        >
                            Data Alumni
                        </Link>
                        <Link
                            className="block bg-emerald-300 my-3 py-3 pl-2 hover:cursor-pointer border-y border-white/50 hover:bg-opacity-50"
                            href={route("event")}
                        >
                            Event
                        </Link>
                    </div>
                </div>
                <div
                    className={clsx(
                        showSidebar ? "translate-x-[20vw]" : "translate-x-0",
                        "relative z-[9999] flex justify-between items-center left-0 ease-linear duration-300 transition bg-emerald-400 w-full px-4 py-3"
                    )}
                >
                    <button
                        className="border border-gray-300/40 shadow-sm shadow-gray-400/50 text-white rounded-md"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                    <div className="relative">
                     <DropdownMenu className={'text-white relative  '} toggleAnimate={false}
                    label={auth.user.name }>
                    <DropdownMenu.Link href={route("beranda")}>
                    Setting Profile
                    </DropdownMenu.Link>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div  className={clsx(
                        showSidebar ? "translate-x-[20vw]" : "translate-x-0",
                        "relative flex justify-between items-center left-0 ease-linear duration-300 transition w-full"
                    )}>{children}</div>
        </div>
    );
}
