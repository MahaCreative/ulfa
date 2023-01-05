
import React, { useEffect, useRef, useState } from 'react'
import App from '../../Layout/App'
import clsx from 'clsx';
import { useForm } from '@inertiajs/inertia-react';
import CKEDITOR from '../../Components/Editor/CKEDITOR';

export default function Create() {
  
  const input = useRef()
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState(null);
  const { data, setData, post, errors, reset, progress } = useForm({
    judul: '', tanggal_mulai: '', tanggal_berakhir: '', penyelenggara: '', thumbnail: '', kontent:''
  })
  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }
  const submitHanler = (e) => {
    e.preventDefault()
    console.log(data);
    post(route('event-create'))
  }

  return (
    <div className='w-full p-8'>
      <div className={clsx(
          loading ? 'fixed' : 'hidden',
          ' left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center')}>
          <p className='text-white'>a</p>
      </div>
          <p className='text-emerald-400'>Data Alumni Ikatan Pelajar Putri Nahdatul Ulama</p>
        <div className='border border-emerald-400 py-4 px-4 grid grid-cols-2 gap-3 overflow-y-auto min-h-[80%] items-start rounded-lg'>
          <div className=''>
          {errors && (<p className='text-red-500 italic'>{errors.kontent}</p>)}
          <div>
            <label htmlFor='' className='text-base text-emerald-400 my-1.5'>Kontent</label>
            <CKEDITOR handleChange={(e) => { setData({ ...data, kontent: e }) }}  />
          </div>
          </div>
            <div>
          <form action="" onSubmit={submitHanler} encType={'multipart/form-data'}>
            <label htmlFor='judul' className='text-base text-emerald-400 my-1.5'>Judul Event</label>
            <input ref={input} onChange={changeHandler} name='judul'  className=' my-1.5 w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'text'} placeholder='Judul Event' />
            {errors && (<p className='text-red-500 italic'>{errors.judul}</p>)}
            <label htmlFor='tanggal_mulai'  className='text-base text-emerald-400 my-1.5'>Tanggal Mulai Event</label>
            <input ref={input} onChange={changeHandler} name='tanggal_mulai'  className=' my-1.5 w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'date'}/>
            {errors && (<p className='text-red-500 italic'>{errors.tanggal_mulai}</p>)}
            <label htmlFor='tanggal_berakhir' className='text-base text-emerald-400 my-1.5'>Tanggal Berakhir</label>
            <input ref={input} onChange={changeHandler} name='tanggal_berakhir'  className=' my-1.5 w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'date'}/>
            {errors && (<p className='text-red-500 italic'>{errors.tanggal_berakhir}</p>)}
            <label htmlFor='penyelenggara' className='text-base text-emerald-400 my-1.5'>Penyelenggara</label>
            <input ref={input} onChange={changeHandler} name='penyelenggara'  className=' my-1.5 w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'text'} placeholder='Penyelenggara' />
            {errors && (<p className='text-red-500 italic'>{errors.penyelenggara}</p>)}
            <label htmlFor='thumbnail' className='text-base text-emerald-400 my-1.5'>Thumbnail</label>
            <input ref={input} onChange={e => setData('thumbnail', e.target.files[0])} name='thumbnail'  className=' my-1.5 w-full rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'file'} placeholder='Thumbnail' />
            {errors && (<p className='text-red-500 italic'>{errors.thumbnail}</p>)}
            <div className="flex gap-3 my-4">
                <button type='submit' className='rounded-md bg-blue-500 text-white font-fira px-4 py-1.5'>Submit</button>
                <button type='button'className='rounded-md bg-red-500 text-white font-fira px-4 py-1.5'>Cancell</button>
              </div>  
          </form>
            </div>
          </div>
    </div>
  )
}
Create.layout = (page) => <App children={page}/>