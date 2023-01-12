import React from 'react'
import App from '../../Layout/App'
export default function Dashboard() {
  return (
    <div className='w-[95%]'>
      <div className='border-emerald-500 border rounded-md py-3 px-4 my-3 mx-4 w-full'>
        <h1 className='text-bold font-sans font-bold text-emerald-400 text-3xl'>Selamat Datang, di website LPPNU</h1>
        <p className='font-fira text-emerald-300 text-xl font-light'>
          Sistem Informasi ini digunakan untuk memantau data anggota dan alumni LPPNU Mamuju.
        </p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 py-3 px-4 my-1 mx-4 gap-2 w-full'>
        <div className='border-emerald-500 border rounded-md py-2.5 px-4'>
          <h3>Jumlah Data Anggota</h3>
          <p>10</p>
        </div>
        <div className='border-emerald-500 border rounded-md'>a</div>
      </div>
    </div>
  )
}
Dashboard.layout = (page) => <App children={page} />;