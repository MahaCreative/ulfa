import React, { useCallback, useEffect, useRef, useState } from 'react'
import App from '../../Layout/App'
import Table from '../../Components/Tables'
import { Menu } from '@headlessui/react'
import Pagination from '../../Components/Pagination'
import UseModal from '../../CostumHook/Modal/UseModal'
import Modal from '../../Components/Modal'
import { debounce } from 'lodash'
import { Inertia } from '@inertiajs/inertia'
// import Update from './Update'
import Create from './Create'
import clsx from 'clsx'
import { Link } from '@inertiajs/inertia-react'
export default function Event(props) {
    const { data: event, meta, links } = props.event
    
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({ search: '' })
    const [model, setModel] = useState([])
    const reload = useCallback(debounce((query) => {
        Inertia.get(route('event'), query, {
            preserveState: true,
            onBefore :() => setLoading(true),
            onSuccess :() => setLoading(false),
        }, 150);
    })
        , [])
    useEffect(() => reload(params), [params])
    const { open: addModalOpen, close: addModalClose, modal: addTrigger } = UseModal()
    const { open: editModalOpen, close: editModalClose, modal: editTrigger } = UseModal()
    const { open: deleteModalOpen, close: deleteModalClose, modal: deleteTrigger } = UseModal()
    const { open: lihatModalOpen, close: lihatModalClose, modal: lihatTrigger } = UseModal()
    const addModalHandler = () => {
        // setModel('')
        addModalOpen()
    }
    const editModalHandler = (model) => {
        setModel(model)
        editModalOpen()
    }
    const deleteModalHandler= (model) => {
        setModel(model);
        deleteModalOpen()
    }
    function submitDelete() {
        
        Inertia.delete(route('anggota-delete', model), {
            onStart:() =>  setLoading(true),
            onError:() => setLoading(false),
            onSuccess: () =>{
                setLoading(false)
                deleteModalClose()
            }
        })
    }
  return (
      <div className='w-full p-8'>
          <div className={clsx(
              loading ? 'fixed' : 'hidden',
              ' left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center')}>
              <p className='text-white'>a</p>
          </div>
          <div>
              <Modal size={'w-[50%]'} trigger={addTrigger} closeModal={addModalClose} headerTitle={'Tambah Anggota'}>
              <Create onClose={addModalClose} model={model} />
              </Modal>
              <Modal size={'w-[50%]'} trigger={editTrigger} closeModal={editModalClose} headerTitle={'Edit Anggota'}>
                  {/* <Update onClose={editModalClose} model={model} /> */}
              </Modal>
              <Modal size={'w-[50%]'} trigger={deleteTrigger} closeModal={deleteModalClose} headerTitle={'delete Anggota'}>
                  <p>Apakah Anda Yakin Akan Menghapus Data Ini ???</p>
                  <div className="flex gap-3 my-4">
                    <button type='button' onClick={submitDelete} className='rounded-md bg-blue-500 text-white font-fira px-4 py-1.5'>Submit</button>
                    <button type='button' onClick={() => deleteModalClose()} className='rounded-md bg-red-500 text-white font-fira px-4 py-1.5'>Cancell</button>
                </div>
              </Modal>
          </div>

          <div></div>
          <p className='text-emerald-400'>Data Anggota Ikatan Pelajar Putri Nahdatul Ulama</p>
          <div className='px-4 border border-emerald-300 rounded-lg'>
              <div className='flex justify-between items-center py-2.5'>
                  <div className='flex gap-3'>
                      <Link href={route('event-create')} className='rounded-md bg-blue-500 text-white font-fira px-4 py-1.5'>Tambah Event</Link>
                      <input onChange={(e) => setParams({...params, search:e.target.value})} className='rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 ' type={'text'} placeholder='Cari'/>
                  </div>
              </div>
              <div>
                  <Table>
                      <Table.Thead>
                          <tr>
                              <Table.Th>No</Table.Th>
                              <Table.Th>Judul Event</Table.Th>                        
                              <Table.Th>Tanggal Mulai</Table.Th>
                              <Table.Th>Tanggal Berakhir</Table.Th>
                              <Table.Th>Penyelenggara</Table.Th>
                              <Table.Th>Aksi</Table.Th>
                          </tr>
                      </Table.Thead>
                      <Table.Tbody>
                          {event ? event.map((item, key) => (
                              <tr key={key+1}>
                                  <Table.Td>{ key +1}</Table.Td>
                                  <Table.Td>
                                      <div className='flex gap-3 items-center'>
                                          <img className='w-20' src={"storage/"+item.thumbnail} alt="" />
                                          <p>{ item.judul}</p>
                                      </div>
                                  </Table.Td>
                                  <Table.Td>{ item.tanggal_mulai}</Table.Td>
                                    <Table.Td>{item.tanggal_berakhir}</Table.Td>
                                <Table.Td>{ item.penyelenggara}</Table.Td>
                                  {/* <Table.Td>{ item.telp}</Table.Td>
                                  <Table.Td>{ item.angkatan}</Table.Td> */}
                                  <Table.Td>
                                        <Table.Dropdown>
                                            <Menu>
                                                <Table.DropdownButton>
                                                    <Table.DropdownItem>Lihat</Table.DropdownItem>
                                                    <Table.DropdownItem href={route('event-update', item.slug)}>Edit</Table.DropdownItem>
                                                    <Table.DropdownButton onClick={() => deleteModalHandler(item)}>Delete</Table.DropdownButton>
                                                </Table.DropdownButton>
                                          </Menu>
                                        </Table.Dropdown>
                                  </Table.Td>
                              </tr>
                          )) : (<p>Data Tidak Ada</p>)}
                      </Table.Tbody>
                  </Table>
                  <Pagination meta={meta} links={links}></Pagination>
              </div>
          </div>
      </div>
  )
}
Event.layout = (page) => <App children={page}/>
