import React from 'react'
import Navbar from '../../Components/Navbar'
export default function Beranda({profil}) {
  return (
      <div className='min-h-screen w-full bg-emerald-400'>
          <div>
              <Navbar/>
          </div>
          <div className='w-full min-h-screen flex justify-between px-16 gap-3 items-center'>
              <div className='w-1/2 pl-16'>
                  <h4 className='my-3 font-fira font-extralight text-white text-3xl italic'>SELAMAT DATANG</h4>
                  <h1 className='my-3 font-fira font-semibold text-white text-6xl italic'>ANGGOTA DAN ALUMNI</h1>
                  <h1 className='my-3 capitalize font-fira font-bold text-white text-3xl italic '>{profil ? profil.nama : 'ikatan pelajar putri nahdatul ulama'}</h1>
              </div>
              <div className='w-1/2 flex justify-center'>
                  <img src={'images/wisuda.png'} className='w-[50%]' alt="" />
              </div>
          </div>
    </div>
  )
}
