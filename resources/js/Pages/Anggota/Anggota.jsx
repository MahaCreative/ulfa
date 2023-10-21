import React, { useCallback, useEffect, useRef, useState } from "react";
import App from "../../Layout/App";
import Table from "../../Components/Tables";
import { Menu } from "@headlessui/react";
import Pagination from "../../Components/Pagination";
import UseModal from "../../CostumHook/Modal/UseModal";
import Modal from "../../Components/Modal";
import { debounce } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import Update from "./Update";
import Create from "./Create";
import clsx from "clsx";
import { usePage } from "@inertiajs/inertia-react";
import Progress from "../../Components/Progress";
import Date from "../../Components/Date";
import Images from "../../Components/Images";
export default function Anggota(props) {
    const { data: anggota, meta, links } = props.anggota;
    const { auth } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({ search: "" });
    const [model, setModel] = useState([]);
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route("anggota"),
                query,

                {
                    preserveState: true,
                    onBefore: () => setLoading(true),
                    onSuccess: () => setLoading(false),
                },
                150
            );
        }),
        []
    );
    useEffect(() => reload(params), [params]);
    const {
        open: addModalOpen,
        close: addModalClose,
        modal: addTrigger,
    } = UseModal();
    const {
        open: editModalOpen,
        close: editModalClose,
        modal: editTrigger,
    } = UseModal();
    const {
        open: deleteModalOpen,
        close: deleteModalClose,
        modal: deleteTrigger,
    } = UseModal();
    const {
        open: lihatModalOpen,
        close: lihatModalClose,
        modal: lihatTrigger,
    } = UseModal();
    const addModalHandler = () => {
        // setModel('')
        addModalOpen();
    };
    const editModalHandler = (model) => {
        setModel(model);
        editModalOpen();
    };
    const deleteModalHandler = (model) => {
        setModel(model);
        deleteModalOpen();
    };
    function submitDelete() {
        Inertia.delete(route("anggota-delete", model), {
            onStart: () => setLoading(true),
            onError: () => setLoading(false),
            onSuccess: () => {
                setLoading(false);
                deleteModalClose();
            },
        });
    }
    const [openImage, setOpenImage] = useState(false);
    const [dataImage, setDataImage] = useState(null);
    // image open
    const openImageHandler = (item) => {
        setDataImage(item);
        setOpenImage(true);
    };
    return (
        <div className="w-full p-8">
            <div
                className={clsx(
                    loading ? "fixed" : "hidden",
                    " left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center"
                )}
            >
                <Progress />
            </div>
            <Images
                img={dataImage}
                closeImage={openImage}
                setCloseImage={setOpenImage}
            />
            <div>
                <Modal
                    size={"w-[95%] md:w-[80%] lg:w-[50%]"}
                    trigger={addTrigger}
                    closeModal={addModalClose}
                    headerTitle={"Tambah Anggota"}
                >
                    <Create onClose={addModalClose} model={model} />
                </Modal>
                <Modal
                    size={"w-[95%] md:w-[80%] lg:w-[50%]"}
                    trigger={editTrigger}
                    closeModal={editModalClose}
                    headerTitle={"Edit Anggota"}
                >
                    <Update onClose={editModalClose} model={model} />
                </Modal>
                <Modal
                    size={"w-[95%] md:w-[80%] lg:w-[50%]"}
                    trigger={deleteTrigger}
                    closeModal={deleteModalClose}
                    headerTitle={"delete Anggota"}
                >
                    <p>Apakah Anda Yakin Akan Menghapus Data Ini ???</p>
                    <div className="flex gap-3 my-4">
                        <button
                            type="button"
                            onClick={submitDelete}
                            className="rounded-md bg-blue-500 text-white font-fira px-4 py-1.5"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => deleteModalClose()}
                            className="rounded-md bg-red-500 text-white font-fira px-4 py-1.5"
                        >
                            Cancell
                        </button>
                    </div>
                </Modal>
            </div>

            <div>
                <Date />
            </div>
            <p className="text-emerald-400">
                Data Anggota Ikatan Pelajar Putri Nahdatul Ulama
            </p>
            <div className="px-4 border border-emerald-300 rounded-lg py-2.5">
                <div className="flex justify-between items-center py-2.5">
                    <div className="flex gap-3">
                        {auth.role[0] === "admin" && (
                            <>
                                <button
                                    onClick={addModalHandler}
                                    className="rounded-md bg-blue-500 text-white font-fira px-1.5 md:px-4 py-1.5 text-sm md:text-md lg:text-lg xl:text-xl"
                                >
                                    Tambah Anggota
                                </button>
                            </>
                        )}
                        <input
                            onChange={(e) =>
                                setParams({ ...params, search: e.target.value })
                            }
                            className="rounded-md border border-emerald-500 text-emerald-400 font-fira outline-none focus:ring focus:ring-emerald-400/30 px-1.5 md:px-4 text-sm md:text-md lg:text-lg xl:text-xl"
                            type={"text"}
                            placeholder="Cari"
                        />
                    </div>
                </div>
                <div>
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    No
                                </Table.Th>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    Nama
                                </Table.Th>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    Telp
                                </Table.Th>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    Angktan
                                </Table.Th>
                                {auth.role[0] === "admin" && (
                                    <Table.Th className="text-sm md:text-md lg:text-lg">
                                        Aksi
                                    </Table.Th>
                                )}
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {anggota ? (
                                anggota.map((item, key) => (
                                    <tr key={key + 1}>
                                        <Table.Td className="text-sm md:text-md lg:text-lg">
                                            {key + 1}
                                        </Table.Td>
                                        <Table.Td className="text-sm md:text-md lg:text-lg flex gap-2 items-center">
                                            <img
                                                src={
                                                    "/storage/" + item.thumbnail
                                                }
                                                alt=""
                                                onClick={() =>
                                                    openImageHandler(
                                                        item.thumbnail
                                                    )
                                                }
                                                className="h-12 w-12 p-1.5 border border-gray-400/50 shadow-sm rounded-md hover:cursor-pointer hover:bg-emerald-400/40 transition duration-300 ease-in"
                                            />
                                            <p>{item.nama_lengkap}</p>
                                        </Table.Td>
                                        <Table.Td className="text-sm md:text-md lg:text-lg">
                                            {item.telp}
                                        </Table.Td>
                                        <Table.Td className="text-sm md:text-md lg:text-lg">
                                            {item.angkatan}
                                        </Table.Td>
                                        {auth.role[0] === "admin" && (
                                            <>
                                                <Table.Td className="text-sm md:text-md lg:text-lg">
                                                    <Table.Dropdown>
                                                        <Menu>
                                                            <Table.DropdownButton>
                                                                <Table.DropdownButton>
                                                                    Lihat
                                                                </Table.DropdownButton>
                                                                <Table.DropdownButton
                                                                    onClick={() =>
                                                                        editModalHandler(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    Edit
                                                                </Table.DropdownButton>
                                                                <Table.DropdownButton
                                                                    onClick={() =>
                                                                        deleteModalHandler(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </Table.DropdownButton>
                                                            </Table.DropdownButton>
                                                        </Menu>
                                                    </Table.Dropdown>
                                                </Table.Td>
                                            </>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <p>Data Tidak Ada</p>
                            )}
                        </Table.Tbody>
                    </Table>
                    <Pagination meta={meta} links={links}></Pagination>
                </div>
            </div>
        </div>
    );
}
Anggota.layout = (page) => <App children={page} />;
