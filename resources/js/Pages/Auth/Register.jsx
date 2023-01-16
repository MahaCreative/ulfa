import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import Navbar from "../../Components/Navbar";
export default function Login({ profil }) {
    const inputRef = useRef();
    const { data, setData, post, errors } = useForm({
        name: "",
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
        post(route("registrasi"));
    };

    return (
        <div className="min-h-screen w-full bg-emerald-400">
            <div>
                <Navbar />
            </div>
            <div className="w-full min-h-screen flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 gap-3 items-center">
                <div className="w-[95%] md:w-[75] lg:w-1/2 lg:pl-16">
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
                <div className="w-[95%] md:w-[70%] lg:w-1/2 lg:pl-16 px-4 py-1.5 flex justify-center bg-white rounded-md shadow-sm shadow-gray-400/30">
                    <form
                        onSubmit={submitHandler}
                        encType={"multipart/form-data"}
                    >
                        <h3 className="text-center text-4xl font-fira font-semibold text-emerald-400">
                            Register a new user
                        </h3>
                        <div className="flex gap-3 items-center my-3">
                            <div>
                                <div className="my-1.5">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="" className="w-[14vw]">
                                            Username
                                        </label>
                                        <input
                                            ref={inputRef}
                                            onChange={changeHandler}
                                            name="name"
                                            className="w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                            type={"text"}
                                            placeholder="username"
                                            required
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-sm text-red-500 italic">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
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
                                <div className="my-1.5">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="" className="w-[14vw]">
                                            Password
                                        </label>
                                        <input
                                            ref={inputRef}
                                            onChange={changeHandler}
                                            name="password"
                                            className="w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                            type={"password"}
                                            placeholder="Password"
                                            min={6}
                                        />
                                    </div>
                                    {errors.password && (
                                        <p className="text-sm text-red-500 italic">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                <div className="my-1.5">
                                    <div className="flex gap-3 items-center">
                                        <label htmlFor="" className="w-[14vw]">
                                            Password Confirmation
                                        </label>
                                        <input
                                            ref={inputRef}
                                            onChange={changeHandler}
                                            name="password_confirmation"
                                            className="w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                            type={"password"}
                                            placeholder="Password Confirmation"
                                        />
                                    </div>
                                    {errors.password_confirmation && (
                                        <p className="text-sm text-red-500 italic">
                                            {errors.password_confirmation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button
                                type="submit"
                                className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                            >
                                Register
                            </button>
                            <Link
                                href={route("login")}
                                className="rounded-md bg-red-500 text-white font-fira px-4 py-1.5"
                            >
                                Already have an account? Sign in →
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
