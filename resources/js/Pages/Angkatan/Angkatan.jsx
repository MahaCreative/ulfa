import { Menu } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import clsx from "clsx";
import { useState } from "react";
import Date from "../../Components/Date";
import Modal from "../../Components/Modal";
import Table from "../../Components/Tables";
import UseModal from "../../CostumHook/Modal/UseModal";
import App from "../../Layout/App";
import Create from "./Create";
import Update from "./Update";
export default function Angkatan({ angkatan }) {
    const { auth } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState([]);

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
    // Modal
    const editModalHandler = (modal) => {
        setModel(modal);
        editModalOpen();
    };
    const deleteModalHandler = (model) => {
        setModel(model);
        deleteModalOpen();
    };
    function submitDelete() {
        Inertia.delete(route("angkatan-delete", model), {
            onStart: () => setLoading(true),
            onError: () => setLoading(false),
            onSuccess: () => {
                setLoading(false);
                deleteModalClose();
            },
        });
    }

    return (
        <div>
            <Date />
            <div
                className={clsx(
                    loading ? "fixed" : "hidden",
                    " left-0 top-0 bg-slate-500/30 backdrop-blur-sm w-full h-full flex items-center justify-center"
                )}
            >
                <p className="text-white">a</p>
            </div>
            <div>
                <Modal
                    size={"w-[95%] md:w-[80%] lg:w-[50%]"}
                    trigger={deleteTrigger}
                    closeModal={deleteModalClose}
                    headerTitle={"delete Angkatan"}
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
                <Modal
                    size={"w-[70%] md:w-[50%] lg:w-[30%]"}
                    trigger={addTrigger}
                    closeModal={addModalClose}
                    headerTitle={"Tambah Angkatan"}
                >
                    <Create onClose={addModalClose} />
                </Modal>
                <Modal
                    size={"w-[70%] md:w-[50%] lg:w-[30%]"}
                    trigger={editTrigger}
                    closeModal={editModalClose}
                    headerTitle={"Edit Angkatan"}
                >
                    <Update model={model} onClose={editModalClose} />
                </Modal>
            </div>

            <div className="flex gap-3 px-4 mx-3 my-2">
                {auth.role[0] === "admin" && (
                    <>
                        <button
                            onClick={addModalOpen}
                            className="rounded-md bg-blue-500 text-white font-fira px-1.5 md:px-4 py-1.5 text-sm md:text-md lg:text-lg xl:text-xl"
                        >
                            Tambah Angkatan
                        </button>
                    </>
                )}
            </div>
            <div className="px-4 py-3 mx-3">
                <div className="border-gray-300/40 rounded-lg overflow-hidden border">
                    <Table>
                        <Table.Thead className={"bg-emerald-400"}>
                            <tr>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    No
                                </Table.Th>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    Tahun
                                </Table.Th>
                                <Table.Th className="text-sm md:text-md lg:text-lg">
                                    Aksi
                                </Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {angkatan ? (
                                angkatan.map((item, key) => (
                                    <tr key={key + 1}>
                                        <Table.Td className="text-sm md:text-md lg:text-lg">
                                            {key + 1}
                                        </Table.Td>
                                        <Table.Td className="text-sm md:text-md lg:text-lg">
                                            {item.angkatan}
                                        </Table.Td>
                                        {auth.role[0] === "admin" && (
                                            <>
                                                <Table.Td className="text-sm md:text-md lg:text-lg">
                                                    <Table.Dropdown className="text-sm md:text-md lg:text-lg">
                                                        <Menu>
                                                            <Table.DropdownButton>
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
                </div>
            </div>
        </div>
    );
}

Angkatan.layout = (page) => <App children={page} />;
