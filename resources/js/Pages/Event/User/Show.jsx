import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Paralax from "../../../Components/Slider/Paralax";
import Guest from "../../../Layout/Guest";
export default function Show(props) {
    const eventBerlangsung = props.event_berlangsung;
    const event = props.event;
    const event_terbaru = props.event_terbaru;
    const event_berakhir = props.event_berakhir;
    const [params, setParams] = useState({ search: "" });
    const searchHandler = (e) => {
        Inertia.get(route("event-search"), params);
    };
    console.log(event ? "ada" : "tidak ada");
    return (
        <div>
            {event ? (
                <>
                    <div className="w-full h-[60vh]">
                        <Paralax model={eventBerlangsung}></Paralax>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 py-4 px-6 items-start font-fira">
                        <div className="w-[100%] lg:w-[80%] shadow-sm shadow-gray-300/40 py-3 px-4">
                            <h3 className="border-b-4 border-emerald-400 text-2xl inline-block my-4 font-fira font-semibold">
                                {event.judul}
                            </h3>
                            <div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: event.kontent,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="flex gap-3">
                                <input
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            search: e.target.value,
                                        })
                                    }
                                    className="rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                                    type={"text"}
                                    placeholder="Cari"
                                />
                                <button
                                    onClick={searchHandler}
                                    className="py-1 px-2 border rounded-md"
                                >
                                    Search
                                </button>
                            </div>
                            <p className="mt-3 shadow-sm shadow-gray-3 bg-emerald-400 py-1.5 px-3">
                                Event Terbaru
                            </p>
                            <div className=" shadow-sm shadow-gray-300/50 px-4">
                                {event_terbaru.length === 0 ? (
                                    <p>
                                        Belum Ada Event Yang Telah Ditambahkan
                                    </p>
                                ) : (
                                    event_terbaru.map((item) => (
                                        <p className="text-emerald-400 my-1">
                                            {item.judul}
                                        </p>
                                    ))
                                )}
                            </div>
                            <div className=" shadow-sm shadow-gray-300/50 px-4">
                                {event_berakhir.length === 0 ? (
                                    <p>Belum Ada Event Yang Telah Berakhir</p>
                                ) : (
                                    event_berakhir.map((item) => (
                                        <p className="text-emerald-400 my-1">
                                            {item.judul}
                                        </p>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="min-h-screen w-full bg-emerald-400">
                    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-between px-4 md:px-8 lg:px-8 xl:px-16 gap-3 items-center">
                        <div className="w-[90%] lg:w-1/2 px-4 md:px-8 lg:px-8 xl:px-16">
                            <div>
                                <p className="font-extrabold font-sans text-9xl text-center text-white">
                                    404
                                </p>
                                <p className="text-center text-white">
                                    Tidak Ada Data Yang Ditemukan
                                </p>
                            </div>
                        </div>
                        <div className="w-[90%] lg:w-1/2 justify-center hidden md:flex">
                            <img
                                src={"/images/wisuda.png"}
                                className="w-[50%]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
Show.layout = (page) => <Guest children={page} />;
