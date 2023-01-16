import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react'

export default function Profile() {
    const { angkatan } = usePage().props;
    const { rolesName } = usePage().props;
    const {profile} = usePage().props
    const inputRef = useRef();
    const { data, setData, post, errors, progress } = useForm({
        id: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        alamat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        telp: "",
        angkatan: "",
        thumbnail: "",
        tempat_bekerja:'',
        status_anggota:'anggota',
    });
    const [loading, setLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        if(profile === null){
            post(route('post-profile'))
        }else{
            Inertia.post(route("update-profile", data.id), {
                _method: "put",
                data: data,
                thumbnail: data.thumbnail,
                onStart: () => setLoading(true),
                // onError: () => setLoading(false),
            });
        }
    };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    console.log(profile);
    useEffect(() => {
        setData({ ...data, 
            id: profile !== null ? profile.id: '',
        nama_lengkap: profile !== null ? profile.nama_lengkap: '',
        jenis_kelamin: profile !== null ? profile.jenis_kelamin: '',
        alamat: profile !== null ? profile.alamat: '',
        tempat_lahir: profile !== null ? profile.tempat_lahir: '',
        tanggal_lahir: profile !== null ? profile.tanggal_lahir: '',
        telp: profile !== null ? profile.telp: '',
        angkatan: profile !== null ? profile.angkatan_id: '',
        thumbnail: profile !== null ? profile.thumbnail: '',
        tempat_bekerja:profile !== null ? profile.tempat_bekerja: '',
        status_anggota:profile !== null ? profile.status_anggota: '',
        })
    }, [profile])

  return (
    <div className='w-full flex justify-center bg-white rounded-md shadow-sm shadow-gray-400/30'>
    <div>
            <div
                className={clsx(
                    loading ? "fixed" : "hidden",
                    " left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center"
                )}
            >
                <p className="text-white">a</p>
            </div>
            <form onSubmit={submitHandler} encType={"multipart/form-data"}>
                <div className="flex gap-3 items-center">
                    <div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[15vw]">
                                    Nama Lengkap
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="nama_lengkap"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Nama Lengkap"
                                    value={data.nama_lengkap}
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
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Jenis Kelamin
                                </label>
                                <select
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="jenis_kelamin"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                >
                                    <option defaultValue={data.jenis_kelamin} selected disabled>
                                        {profile ? profile.jenis_kelamin : 'Pilih Jenis Kelamin'}
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
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Alamat
                                </label>
                                <textarea
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="alamat"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Alamat"
                                    value={data.alamat}
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
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Tempat Lahir
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="tempat_lahir"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Tempat Lahir"
                                    value={data.tempat_lahir}
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
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Tanggal Lahir
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="tanggal_lahir"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Tanggal Lahir (31-12-2022)"
                                    value={data.tanggal_lahir}
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
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Telephone
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="telp"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Telp"
                                    value={data.telp}
                                />
                            </div>
                            {errors.telp && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.telp}
                                </p>
                            )}
                        </div>
                        {rolesName[0] !== "admin" && (
                            <>
                            <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Status Anggota
                                </label>
                                <select
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="status_anggota"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                >
                                    <option selected value={data.status_anggota} disabled>
                                    {profile ? profile.jenis_kelamin : 'Pilih Status Anggota'}
                                    </option>
                                    
                                    <option value={'anggota'}>
                                        Anggota
                                    </option>
                                    <option value={'alumni'}>
                                        Alumni
                                    </option>
                                </select>
                            </div>
                            {errors.angkatan && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.status_anggota}
                                </p>
                            )}
                        </div>
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Angkatan
                                </label>
                                <select
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="angkatan"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                >
                                    <option selected value={data.angkatan} disabled>
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
                        {data.status_anggota === 'alumni' && (
                            <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
                                    Tempat Bekerja
                                </label>
                                <input
                                    ref={inputRef}
                                    onChange={changeHandler}
                                    name="tempat_bekerja"
                                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Tempat Bekerja"
                                    value={data.tempat_bekerja}
                                />
                            </div>
                            {errors.telp && (
                                <p className="text-sm text-red-500 italic">
                                    {errors.telp}
                                </p>
                            )}
                        </div>
                        )}
                            </>
                        )}
                        <div className="my-1.5">
                            <div className="flex gap-3 items-center">
                                <label htmlFor="" className="text-sm md:text-md lg:text-lg w-[17vw] md:w-[14vw]">
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
                </div>
                <div className="flex gap-3 my-4">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                    >
                        {profile ? 'Update Profile' : 'Create Profile'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
