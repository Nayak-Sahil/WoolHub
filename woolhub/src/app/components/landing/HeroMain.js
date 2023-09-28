import Image from 'next/image'
import React from 'react'
import hero from '../../../../public/Assets/Images/Landing/hero.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft, faTractor } from '@fortawesome/free-solid-svg-icons'

export default function HeroMain() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex align-center justify-center">
                    <Image src={hero} alt='WoolHub' width={450}/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <p className='mb-5 text-md'>🐏 <span className='text-primary'>67.33 million</span> total Sheep in country.</p>
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 leading-loose">Revolutionizing <span className='text-primary'>India's Wool Industry</span><br/> with AI/ML-Powered Innovation</h1>
                    <p className="mb-8 leading-relaxed">Join us in revolutionizing India's wool industry through a digital transformation.</p>
                    <div className="flex lg:flex-row md:flex-col mt-3 w-[300px] justify-between">
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 hover:text-secondary focus:outline-none shadow-md w-[130px] justify-center">
                        <FontAwesomeIcon icon={faTractor} width={20} />
                        <span className='ml-2'>Explore</span>
                        </button>
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 hover:text-secondary focus:outline-none shadow-md w-[130px] justify-center">
                        <FontAwesomeIcon className='rotate-45' icon={faRightLeft} width={15}/>
                        <span className='ml-2'>Trade</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
