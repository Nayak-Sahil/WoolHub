import Image from 'next/image'
import React from 'react'
import { faChartSimple, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services({ title, descrp, btntxt, spanDescrp, img, type, align }) {
    return (
        <section class={`text-gray-600 body-font`}>
            <div class={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:flex md:${align} items-center justify-between`}>
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
                        {/* <br class="hidden lg:inline-block" />readymade gluten */}
                    </h1>
                    <p class="mb-8 leading-relaxed"><span className='text-primary'>{spanDescrp}</span> {descrp}</p>

                    {
                        (type == "market") ? 
                        <div className='flex w-full h-max mt-5 mb-8 align-center justify-between flex-wrap'>
                            <div class="flex w-72">
                                <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-md">
                                    <div class="p-3">
                                        <div class="absolute -mt-10 ml-2 h-14 w-14 rounded-xl bg-primary text-center text-white shadow-lg flex align-center justify-center">
                                            <FontAwesomeIcon icon={faSquarePollVertical} width={28} />
                                        </div>
                                        <div class="pt-1 text-right">
                                            <p class="text-sm font-light capitalize">Price Per K.g.</p>
                                            <h4 class="text-xl font-semibold tracking-tighter xl:text-2xl">89 ₹</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-72">
                                <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-md">
                                    <div class="p-3">
                                        <div class="absolute -mt-10 ml-2 h-14 w-14 rounded-xl bg-primary text-center text-white shadow-lg flex align-center justify-center">
                                            <FontAwesomeIcon icon={faSquarePollVertical} width={28} />
                                        </div>
                                        <div class="pt-1 text-right">
                                            <p class="text-sm font-light capitalize">Price Per K.g.</p>
                                            <h4 class="text-xl font-semibold tracking-tighter xl:text-2xl">89 ₹</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""
                    }
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">{btntxt}</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image class="object-cover object-center rounded" alt="Market Analysis" src={img} width={450} height={450}/>
                </div>
            </div>
        </section>
    )
}
