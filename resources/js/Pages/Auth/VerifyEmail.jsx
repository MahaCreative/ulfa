import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import Navbar from "../../Components/Navbar";
export default function Login({ profil }) {
    const inputRef = useRef();
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
        remember: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="min-h-screen w-full bg-emerald-400">
            <div>
                <Navbar />
            </div>
            <div className="w-full min-h-screen flex justify-between px-16 gap-3 items-center">
                <div className="w-1/2 pl-16">
                    <h4 className="my-3 font-fira font-extralight text-white text-3xl italic">
                        SELAMAT DATANG
                    </h4>
                    <h1 className="my-3 font-fira font-semibold text-white text-6xl italic">
                        ANGGOTA DAN ALUMNI
                    </h1>
                    <h1 className="my-3 capitalize font-fira font-bold text-white text-3xl italic ">
                        {profil
                            ? profil.nama
                            : "ikatan pelajar putri nahdatul ulama"}
                    </h1>
                </div>
                <div className="w-1/2 py-2.5 px-5 bg-white rounded-md shadow-sm shadow-gray-400/30">
                    <p>Silahkan Melakukan Registrasi Melalui Email Yang Telah Dikirim...</p>
                    <div className="flex gap-3 mt-1">
                            <Link
                                href={route('resend')}
                                className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                            >
                                Resend Email
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
