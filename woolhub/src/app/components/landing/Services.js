import Image from 'next/image'
import React from 'react'
import { faChartSimple, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Services({ title, descrp, btntxt, spanDescrp, img, type, align, moreDescrp, spanMoreDescrp }) {
    return (
        <section className={`text-gray-600 body-font px-20`}>
            <div className={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:flex md:${align} items-center justify-between`} style={{flexDirection: align}}>
                <div className={`lg:flex-grow md:${align == "row-reverse" ? 'w-[500px]': "w-[450px]"} lg:${align == "row-reverse" ? 'pl-24': "pr-24"} md:${align == "row-reverse" ? 'pl-16': "pr-16"} flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`}>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
                        {/* <br className="hidden lg:inline-block" />readymade gluten */}
                    </h1>
                    <p className="mb-8 leading-relaxed"><span className='text-primary'>{spanDescrp}</span> {descrp}</p>
                    <p className="mb-8 leading-relaxed"><span className='text-primary'>{spanMoreDescrp}</span> {moreDescrp}</p>

                    {
                        (type == "Market") ? 
                        <div className='flex flex-col w-full h-max mt-1 mb-8 align-center justify-between flex-wrap'>
                            <div className="flex w-72 h-fit">
                                <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-md">
                                    <div className="p-3">
                                        <div className="absolute -mt-10 ml-2 h-14 w-14 rounded-xl bg-primary text-center text-white shadow-lg flex align-center justify-center">
                                            <FontAwesomeIcon icon={faSquarePollVertical} width={28} />
                                        </div>
                                        <div className="pt-1 text-right">
                                            <p className="text-sm font-light capitalize">Price Per K.g.</p>
                                            <h4 className="text-xl font-semibold tracking-tighter xl:text-2xl">89 ₹</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-72 mt-10">
                                <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-md">
                                    <div className="p-3">
                                        <div className="absolute -mt-10 ml-2 h-14 w-14 rounded-xl bg-primary text-center text-white shadow-lg flex align-center justify-center">
                                            <FontAwesomeIcon icon={faSquarePollVertical} width={28} />
                                        </div>
                                        <div className="pt-1 text-right">
                                            <p className="text-sm font-light capitalize">Price Per K.g.</p>
                                            <h4 className="text-xl font-semibold tracking-tighter xl:text-2xl">89 ₹</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""
                    }
                    <div className="flex justify-center">
                        <Link href={`/${type}`}>
                        <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">{btntxt}</button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded" alt="Market Analysis" src={img} width={450} height={450}/>
                </div>
            </div>
        </section>
    )
}
