import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import DropdownMenu from "./DropdownMenu";

export default function ResponsiveNavigation() {
    const { auth } = usePage().props
    console.log(auth.user);
    return (
        <nav className="border-b border-emerald-500 bg-emerald-500 px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-semibold text-white" href="/">
                    {/* {import.meta.env.VITE_APP_NAME} */}
                </Link>
                <DropdownMenu
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <DropdownMenu.Link href={route("beranda")}>
                        Home
                    </DropdownMenu.Link>
                    <DropdownMenu.Link href={route("event-user")}>
                        Event
                    </DropdownMenu.Link>
                    {auth.user ? (
                        <DropdownMenu.Link
                        // href={route('logout')}
                        method="POST"
                        as="button"
                    >
                        Logout
                    </DropdownMenu.Link>
                    ) : (
                        <div>
                            <DropdownMenu.Link
                            href={route('login')}
                                                >
                            Login
                                </DropdownMenu.Link>
                                <DropdownMenu.Link
                        href={route('registrasi')}
                    >
                        Register
                            </DropdownMenu.Link>
                        </div>
                    )}
                </DropdownMenu>
            </div>
        </nav>
    );
}
