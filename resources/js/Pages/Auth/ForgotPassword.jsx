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
        post(route("forgot_password"));
    };

    return (
        <div className="min-h-screen w-full bg-emerald-400">
            <div>
                <Navbar />
            </div>
            <div className="w-full flex-col md:flex-row min-h-screen flex justify-between px-4 md:px-8 lg:px-16 gap-3 items-center">
                <div className="w-[95%] md:w-[70%] lg:w-1/2 lg:pl-16">
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
                <div className="w-[95%] md:w-[70%] lg:w-1/2 px-4 lg:pl-16 flex justify-center bg-white rounded-md shadow-sm shadow-gray-400/30">
                    <form
                        onSubmit={submitHandler}
                        encType={"multipart/form-data"}
                    >
                        <h3 className="text-xl font-fira font-semibold text-emerald-400">
                            Masukkan Email Untuk Mendapatkan Email Reset
                            Password
                        </h3>
                        <div className="flex gap-3 items-center my-3">
                            <div>
                                <div className="my-1.5">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="" className="w-[14vw]">
                                            Email
                                        </label>
                                        <input
                                            ref={inputRef}
                                            onChange={changeHandler}
                                            name="email"
                                            className="w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                            type={"email"}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-sm text-red-500 italic">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type=""
                                    className="rounded-md bg-emerald-500 text-white font-fira px-4 py-1.5"
                                >
                                    Send Email
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <Link
                                href={route("login")}
                                className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                            >
                                Already have an account? Sign in →
                            </Link>
                            <Link
                                href={route("registrasi")}
                                className="rounded-md bg-red-500 text-white font-fira px-4 py-1.5"
                            >
                                Create an account.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
