import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import NavLink from "../Components/NavLink";
import DropdownMenu from "../Components/DropdownMenu";
import ResponsiveNavigation from "../Components/ResponsiveNavigation";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <>
            <ResponsiveNavigation />
            <nav className="hidden border-b border-dashed border-gray-700 bg-gray-800 py-4 shadow lg:block">
                <div className="mx-auto max-w-screen-2xl px-4">
                    <div className="flex items-center justify-between">
                        <Link
                            // href={route('home')}
                            className="mr-3 text-lg font-semibold capitalize text-white"
                        >
                            Ikatan Pelajar Putri Nahdatul Ulama
                        </Link>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <NavLink
                                    href={route("beranda")}
                                    active={route().current("beranda")}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("event-user")}
                                    active={route().current("event-user")}
                                >
                                    Event
                                </NavLink>
                            </div>
                            <div className="flex items-center">
                                {auth.user ? (
                                    <div className="flex items-center">
                                        <DropdownMenu label={auth.user.name}>
                                            <DropdownMenu.Link
                                                href={route("dashboard")}
                                            >
                                                Dashboard
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                href={route("alumni")}
                                            >
                                                Data Alumni
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                href={route("anggota")}
                                            >
                                                Data Anggota
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                href={route("event")}
                                            >
                                                Data Event
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link
                                                href={route("logout")}
                                            >
                                                Logout
                                            </DropdownMenu.Link>
                                        </DropdownMenu>
                                    </div>
                                ) : (
                                    ""
                                )}
                                {!auth.user ? (
                                    <div className="flex items-center">
                                        <NavLink
                                            href={route("login")}
                                            active={route().current("login")}
                                        >
                                            Login
                                        </NavLink>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
