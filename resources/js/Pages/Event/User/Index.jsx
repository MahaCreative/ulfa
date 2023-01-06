import { Link } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React from "react";
import Moment from "react-moment";
import Paralax from "../../../Components/Slider/Paralax";
import Guest from "../../../Layout/Guest";

export default function Index(props) {
    const { data: event, meta, links } = props.event;
    const eventBerlangsung = props.event_berlangsung;
    const event_terbaru = props.event_terbaru;
    const event_berakhir = props.event_berakhir;
    return (
        <div>
            <div className="w-full h-[60vh]">
                <Paralax model={eventBerlangsung}></Paralax>
            </div>
            <div className="flex flex-col md:flex-row gap-3 py-4 px-6 items-start font-fira">
                <div className="w-[80%]">
                    <h3 className="border-b-4 border-emerald-400 text-4xl inline-block my-4 font-fira font-semibold">
                        Event Terbaru
                    </h3>
                    {event.length > 0 ? (
                        <div
                            className={clsx(
                                event.length > 3 ? "xl:grid-cols-4" : "",
                                "grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                            )}
                        >
                            {event
                                ? event.map((item, key) => (
                                      <div className="shadow-md shadow-gray-400/30 py-2.5 px-4">
                                          <div className="relative min-h-[25vh] w-[100%] bg-emerald-100 ">
                                              <p className="absolute z-10 bottom-[1vh] left-[1vw] bg-emerald-400/50 backdrop-blur-sm text-white font-fira px-3 py-1 rounded-md inline-block">
                                                  <Moment
                                                      fromNow
                                                      date={item.created_at}
                                                  />
                                              </p>
                                              <img
                                                  className="relative max-h-[25vh] w-[100%] object-fill object-center"
                                                  src={
                                                      "storage/" +
                                                      item.thumbnail
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <article className="relative block">
                                              <Link
                                                  href={route(
                                                      "event-show",
                                                      item.slug
                                                  )}
                                              >
                                                  <h3 className="duration-300 ease-out transition hover:cursor-pointer hover:text-emerald-600 text-emerald-400 font-fira font-semibold text-lg capitalize">
                                                      {item.judul}
                                                  </h3>
                                              </Link>
                                              {/* <p className='line-clamp-3' ></p> */}
                                              <p
                                                  className="text-base line-clamp-4 my-1.5 text-gray-700 font-fira"
                                                  dangerouslySetInnerHTML={{
                                                      __html: item.kontent,
                                                  }}
                                              ></p>
                                          </article>
                                          <div className="flex items-center justify-between">
                                              <p className="font-fira font-extralight text-sm text-gray-400">
                                                  {item.tanggal_mulai}
                                              </p>
                                              <p className="font-fira font-extralight text-sm text-gray-400">
                                                  {item.tanggal_berakhir}
                                              </p>
                                          </div>
                                      </div>
                                  ))
                                : ""}
                        </div>
                    ) : (
                        <div className="border border-emerald-400 py-2.5 px-5 items-center text-center rounded-lg">
                            <h3>Belum Ada Data Event</h3>
                        </div>
                    )}
                </div>
                <div className="py-4">
                    <input
                        onChange={(e) =>
                            setParams({ ...params, search: e.target.value })
                        }
                        className="rounded-md border border-emerald-500 text-emerald-400 font-fira px-4 py-1.5 outline-none focus:ring focus:ring-emerald-400/30 "
                        type={"text"}
                        placeholder="Cari"
                    />
                    <p className="mt-3 shadow-sm shadow-gray-3 bg-emerald-400 py-1.5 px-3">
                        Event Terbaru
                    </p>
                    <div className=" shadow-sm shadow-gray-300/50 px-4">
                        {event.length === 0 ? (
                            <p>Belum Ada Artikel Yang Telah Ditambahkan</p>
                        ) : (
                            event.map((item) => (
                                <p className="text-emerald-400 my-1">
                                    {item.judul}
                                </p>
                            ))
                        )}
                    </div>
                    <div className=" shadow-sm shadow-gray-300/50 px-4">
                        {event_terbaru.length === 0 ? (
                            <p>Belum Ada Event Yang Telah Berakhir</p>
                        ) : (
                            event_terbaru.map((item) => (
                                <p className="text-emerald-400 my-1">
                                    {item.judul}
                                </p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
Index.layout = (page) => <Guest children={page} />;
