import { useForm, usePage } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Progress from "../../Components/Progress";

export default function Create({ onClose, model }) {
    const { angkatan } = usePage().props;
    const inputRef = useRef();
    const { data, setData, post, put, errors, progress } = useForm({
        id: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        alamat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        telp: "",
        angkatan: "",
        thumbnail: "",
    });
    const [loading, setLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("anggota"), {
            onStart: () => setLoading(true),
            onError: () => setLoading(false),
            onSuccess: () => {
                setLoading(false);
                onClose();
            },
        });
    };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div
                className={clsx(
                    loading ? "fixed" : "hidden",
                    " left-0 top-0 bg-slate-500/30 backdrop-blur-sm text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full h-full flex items-center justify-center"
                )}
            >
                <Progress />
            </div>
            <form onSubmit={submitHandler} encType={"multipart/form-data"}>
                <div className="flex gap-3 items-center">
                    <div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="nama_lengkap"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Nama Lengkap"
                                />
                            </div>
                            {errors.nama_lengkap && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.nama_lengkap}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Jenis Kelamin
                                </label>
                                <select
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="jenis_kelamin"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                >
                                    <option defaultValue={""} selected disabled>
                                        Pilih Jenis Celamin{" "}
                                    </option>
                                    <option value="laki-laki">Laki-Laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            {errors.jenis_kelamin && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.jenis_kelamin}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Alamat
                                </label>
                                <textarea
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="alamat"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Alamat"
                                />
                            </div>
                            {errors.alamat && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.alamat}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Tempat Lahir
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="tempat_lahir"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Tempat Lahir"
                                />
                            </div>
                            {errors.tempat_lahir && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.tempat_lahir}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Tanggal Lahir
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="tanggal_lahir"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Tanggal Lahir (31-12-2022)"
                                />
                            </div>
                            {errors.tanggal_lahir && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.tanggal_lahir}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Telephone
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="telp"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Telp"
                                />
                            </div>
                            {errors.telp && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.telp}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Angkatan
                                </label>
                                <select
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="angkatan"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                >
                                    <option selected disabled>
                                        Pilih Angkatan{" "}
                                    </option>
                                    {angkatan.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.angkatan}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.angkatan && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.angkatan}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label
                                    htmlFor=""
                                    className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setData("thumbnail", e.target.files[0])
                                    }
                                />
                            </div>
                            {progress && (
                                <progress
                                    className="bg-white rounded-md border border-dashed border-white"
                                    value={progress.percentage}
                                    max="100"
                                >
                                    {progress.percentage}%
                                </progress>
                            )}
                            {errors.thumbnail && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.thumbnail}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="hidden md:block p-3 border border-emerald-400 rounded-lg">
                        <img src={"images/lpp.png"} className="" alt="" />
                        <p className="text-center text-emerald-400 my-3">
                            Image
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 my-4">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => onClose()}
                        className="rounded-md bg-red-500 text-white font-fira px-4 py-1.5"
                    >
                        Cancell
                    </button>
                </div>
            </form>
        </div>
    );
}
