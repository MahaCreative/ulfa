import React from 'react'
import App from '../../Layout/App'
export default function Dashboard({ profil }) {
  return (
    <div className='w-[100%] max-h-screen'>
      <div className="w-full min-h-[80%]  flex flex-col md:flex-row md:justify-between px-4 md:px-8 lg:px-8 xl:px-16 gap-3 items-center justify-center">
        <div className="w-[90%] lg:w-1/2 px-4 md:px-8 lg:px-8 xl:px-16">
            <h4 className="my-3 font-fira font-extralight text-emerald-500 text-3xl italic">
                SELAMAT DATANG
            </h4>
            <h1 className="my-3 font-fira font-semibold text-emerald-500 text-6xl italic">
                ANGGOTA DAN ALUMNI
            </h1>
            <h1 className="my-3 capitalize font-fira font-bold text-emerald-500 text-3xl italic ">
                {profil
                    ? profil.nama
                    : "ikatan pelajar putri nahdatul ulama"}
            </h1>
        </div>
        <div className="w-[90%] lg:w-1/2 hidden md:flex justify-center">
            <img src={"images/wisuda.png"} className="w-[50%]" alt="" />
        </div>
    </div>
    </div>
  )
}
Dashboard.layout = (page) => <App children={page} />;