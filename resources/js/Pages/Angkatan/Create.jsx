import { useForm } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React, { useState } from "react";
import Progress from "../../Components/Progress";

export default function Create({ onClose }) {
    const { data, setData, reset, errors, post } = useForm({ angkatan: "" });
    const [loading, setLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("angkatan"), {
            onStart: () => setLoading(true),
            onError: () => setLoading(false),
            onSuccess: () => {
                setLoading(false);
                onClose();
            },
        });
    };
    return (
        <div>
            <div
                className={clsx(
                    loading ? "fixed" : "hidden",
                    " left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center"
                )}
            >
                <Progress />
            </div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Angkatan</label>
                <input
                    type="number"
                    onChange={(e) =>
                        setData({ ...data, angkatan: e.target.value })
                    }
                    min="2000"
                    max={2100}
                    className="text-sm md:text-base font-light w-[70%] md:w-[80%] lg:w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30"
                />
                {errors.angkatan && (
                    <p className="text-red-500 italic text-sm">
                        {errors.angkatan}
                    </p>
                )}
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
