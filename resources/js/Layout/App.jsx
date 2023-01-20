import { Menu } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import DropdownMenu from "../Components/DropdownMenu";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";
export default function App({ profile, children }) {
    const [active, setActive] = useState(false);
    const { auth } = usePage().props;

    const menuHandler = () => {
        setActive(!active);
    };
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });
    return (
        <div className="flex">
            <Toaster />
            <div className=" min-h-[100vh] bg-emerald-400 w-[15vw] shadow-sm shadow-gray-600/50 hidden md:inline-block">
                <div>
                    <div className="mt-8 mb-2 w-full flex items-center justify-center">
                        <img src="/images/lpp.png" className="w-[50%]" alt="" />
                    </div>
                    <div>
                        <h3 className="font-fira  w-full flex items-center justify-center font-bold text-4xl text-white">
                            {" "}
                            IPPNU
                        </h3>
                    </div>
                </div>

                <div className="w-full px-4">
                    <Link
                        className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                        href={route("dashboard")}
                    >
                        Dashboard
                    </Link>
                    <Link
                        className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                        href={route("alumni")}
                    >
                        Alumni
                    </Link>
                    <Link
                        className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                        href={route("anggota")}
                    >
                        Anggota
                    </Link>
                    {auth.role[0] === "admin" && (
                        <>
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("event")}
                            >
                                Event
                            </Link>
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("angkatan")}
                            >
                                Angkatan
                            </Link>
                        </>
                    )}
                    <Link
                        className="border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                        href={route("setting")}
                    >
                        Setting Profil
                    </Link>
                    <Link
                        className=" w-full border-y border-white/80 py-1.5 px-3 block text-white my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition text-left"
                        href={route("logout")}
                    >
                        Logout
                    </Link>
                </div>
            </div>
            <div className="w-full">
                <div className="py-1.5 px-4 bg-emerald-400 flex md:justify-start justify-end h-12 relative">
                    <button
                        onClick={menuHandler}
                        className="py-1 px-2 border rounded-md text-white md:hidden inline-block hover:bg-emerald-500 shadow-sm shadow-gray-400"
                    >
                        MENU
                    </button>
                    <Menu
                        className={clsx(
                            active
                                ? "inline-block translate-y-0 opacity-100"
                                : "-translate-y-96 opacity-0",
                            "shadow-sm shadow-gray-400/50 rounded-md border border-separate absolute top-[50px] w-[50%] duration-300 transition md:hidden right-5 bg-emerald-400/20  backdrop-blur-sm"
                        )}
                    >
                        <div className="">
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("dashboard")}
                            >
                                Dashboard
                            </Link>
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("alumni")}
                            >
                                Alumni
                            </Link>
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("anggota")}
                            >
                                Anggota
                            </Link>
                            {auth.role[0] === "admin" && (
                                <>
                                    <Link
                                        className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                        href={route("event")}
                                    >
                                        Event
                                    </Link>
                                    <Link
                                        className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                        href={route("angkatan")}
                                    >
                                        Angkatan
                                    </Link>
                                </>
                            )}
                            <Link
                                className="border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition"
                                href={route("setting")}
                            >
                                Setting Profil
                            </Link>
                            <Link
                                className=" w-full border-y border-white/80 py-1.5 px-3 block text-black my-1.5 hover:cursor-pointer hover:bg-emerald-600 duration-300 transition text-left"
                                href={route("logout")}
                            >
                                Logout
                            </Link>
                        </div>
                    </Menu>
                </div>
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}
