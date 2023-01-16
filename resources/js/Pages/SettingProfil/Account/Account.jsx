import { useForm } from '@inertiajs/inertia-react';
import React, { useRef } from 'react'

export default function Account() {
    const inputRef = useRef();
    const { data, setData, put, errors } = useForm({
        name:'',
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
        put(route("update-akun"));
    };
  return (
        <div className=" px-4 w-full flex justify-center bg-white rounded-md shadow-sm shadow-gray-400/30">
                    <form
                        onSubmit={submitHandler}
                        encType={"multipart/form-data"}
                        className='w-full'
                    >
                        <p className=" text-lg font-fira font-light text-emerald-400">
                            Kosongkan jika tidak ingin merubah email dan username
                        </p>
                        <div className="flex gap-3 items-center my-3 w-full px-3">
                            <div className='w-full'>
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
                                Update
                            </button>
                        </div>
                    </form>
                </div>
  )
}
