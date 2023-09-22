"use client"
import React from 'react';
import css from "/src/app/globals.css"
import { Button } from '@material-tailwind/react';
import productionImg from '../../../../../public/Assets/Images/Education/farmer1.jpg'
import Image from 'next/legacy/image';

const RoadMap = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-y-scroll max-h-screen no-scrollbar w-full">
        {/* <div className='w-full relative'>
        <input id="steps-range" type="range" min="0" max="5" step="1" className="w-full h-[8px] bg-gray-200 rounded-3xl appearance-none cursor-pointer z-20 outline-none" defaultValue={0}></input>
        <div className='block'>
        <div className='absolute border-[9px] top-1 -z-10 left-1 rotate-45'>
        </div>
        <div className='absolute -left-[1%] text-center top-7'>
        Start
        </div>
        </div>
        <div className='block'>
        <div className='absolute border-[9px] top-1 -z-10 left-[20%] rotate-45'>
        </div>
        <div className='absolute left-[14%] w-40 text-center top-7'>
        How to Produce?
        </div>
        </div>
        <div className='block'>
          <div className='absolute border-[9px] top-1 -z-10 left-[39.5%] rotate-45'>
          </div>
          <div className='absolute left-[34%] w-40 text-center top-7'>
          Learn To Sort
          </div>
          </div>
          <div className='block'>
          <div className='absolute border-[9px] top-1 -z-10 left-[59%] rotate-45'>
          </div>
          <div className='absolute left-[53.5%] w-40 text-center top-7'>
          Quality Assurance
          </div>
          </div>
          <div className='block'>
          <div className='absolute border-[9px] top-1 -z-10 left-[78.7%] rotate-45'>
          </div>
          <div className='absolute left-[73%] w-40 text-center top-7'>
          Learn to Market
          </div>
          </div>
          <div className='block'>
          <div className='absolute border-[9px] top-1 -z-10 left-[98.2%] rotate-45'>
          </div>
          <div className='absolute -right-16 w-40 text-center top-7'>
          End
          </div>
          </div>
          
        </div> */}
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">From Fleece to Fortune</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Your go-to resource for wool farming success. Discover essential tips and strategies, from sheep care to wool sales, in one concise guide.</p>
          </div>

          <div className="flex flex-wrap gap-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      )
}

      export default RoadMap


const BlogCard = () => {
  return (
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <Image
            src={productionImg}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            UI/UX Review Check
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-md hover:shadow-primary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
        </div>
      </div>
      )
  }