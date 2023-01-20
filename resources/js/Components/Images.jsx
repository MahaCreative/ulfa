import clsx from "clsx";
import React, { useState } from "react";

export default function Images({ img, closeImage, setCloseImage }) {
    return (
        <div
            onClick={() => setCloseImage(false)}
            className={clsx(
                closeImage ? "flex" : " hidden",

                "w-full scale-100 h-full  fixed backdrop-blur-sm bg-gray-900/30 justify-center items-center left-0 top-0 "
            )}
        >
            <div
                className="fixed top-5 left-5 text-xl font-bold font-fira cursor-pointer text-white"
                onClick={() => setCloseImage(false)}
            >
                X
            </div>
            <div className="w-full items-center flex justify-center h-full ">
                <img
                    src={"/storage/" + img}
                    alt=""
                    className={clsx(
                        closeImage ? "opacity-100" : "",
                        "w-[90%] md:w-[80%] lg:w-[50%]  duration-300 opacity-0 transition h-[50%] object-contain object-center"
                    )}
                />
            </div>
        </div>
    );
}
