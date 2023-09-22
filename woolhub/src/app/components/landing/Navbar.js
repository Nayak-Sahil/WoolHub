import React from 'react'

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Wool <span>Hub</span></span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-10 text-primary cursor-pointer hover:text-gray-900">Home</a>
                    <a className="mr-10 text-primary cursor-pointer hover:text-gray-900">Services</a>
                    <a className="mr-10 text-primary cursor-pointer hover:text-gray-900">About Us</a>
                    <a className="mr-10 text-primary cursor-pointer hover:text-gray-900">Contact Us</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-[#27272a] mt-4 md:mt-0">Let's Start</button>
            </div>
        </header>
    )
}