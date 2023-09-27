import React from 'react'
import grantImg from '../../../../../public/Assets/Images/Education/GrantSectionImg.jpg'

const GovernmentSchemes = () => {
    return (
        <div className='mt-5 mr-10 w-full h-[680px] rounded-md shadow-innerlg overflow-y-scroll scroll pb-24'>
            <header className="mx-auto max-w-screen-xl pt-28 text-center">
                <p className="text-gray-500">Published on 25th September, 2023</p>
                <h1 className="mt-2 text-3xl font-bold leading-10 text-gray-900 sm:text-5xl">Empowering Wool Farmers: A Closer Look at Government Grants</h1>
                <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Agriculture</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Wool Farming</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Government Grants</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Livestock Livestock</button>
                </div>
                <img className="sm:h-[34rem] mt-10 w-full object-contain" src={grantImg.src} alt="Featured Image" />
            </header>
            <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                <h1 className="text-3xl text-gray-800 font-semibold mb-4 mt-4">Introduction</h1>
                <p className="text-xl text-left font-medium">Wool farming is an essential component of the agricultural sector, contributing significantly to the textile industry and providing livelihoods to many rural communities. To support the growth and sustainability of wool farming, governments around the world often offer grants and financial assistance programs to wool farmers. In this blog post, we'll delve into the world of wool farming and explore the government grants that play a vital role in this industry's success.</p>
                <h2 className="text-2xl text-gray-800 font-semibold mt-4">Government Grants: A Lifeline for Wool Farmers</h2>
                <p className="text-xl text-left font-medium mt-4">Sheep have been our companions in agriculture for thousands of years, providing us with wool for clothing, blankets, and more. To ensure the finest quality wool, it's essential to pay close attention to their diet. In this blog, we'll explore the critical role of sheep feeding in achieving premium wool production. So, let's dive into the world of nutrition, grazing, and the secrets to nurturing your flock for the softest, most luxurious wool.</p>
                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    "Government grants provide a much-needed boost to wool farmers, helping them overcome challenges and invest in the future of their farms." — Jane Farmer, Wool Farmer Association President.
                </div>
                <p className="text-xl text-left font-medium">Government grants aimed at wool farming serve multiple purposes, including:</p>
                <ol>
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Sustainable Practices: <span className='font-medium'>Grants often encourage the adoption of sustainable farming practices, promoting the well-being of both the sheep and the environment.</span></li>
                        <li>Research and Innovation: <span className='font-medium'>Funding supports research into improved breeding techniques, wool quality, and pest management, leading to better yields and profitability.</span></li>
                        <li>Infrastructure Development:<span className='font-medium'>Grants can be used for building and maintaining essential farm infrastructure, such as shearing sheds and fencing.</span></li>

                        <li>Education and Training: <span className='font-medium'>Government support extends to education and training programs that help wool farmers stay updated with the latest industry trends.</span></li>
                    </ol>
                </ol>

                <h2 className="text-2xl text-gray-800 font-semibold mt-4">Types of Government Grants for Wool Farmers</h2>
                <ol>
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>Agricultural Grants: <span className='font-medium'>These grants are designed to improve the overall efficiency and sustainability of wool farming operations.</span></li>
                        <li>Rural Development Grants: <span className='font-medium'>Focused on revitalizing rural areas, these grants often target wool farming communities to boost their economic development.</span></li>
                        <li>Export and Marketing Grants:<span className='font-medium'>Grants can be used for building and maintaining essential farm infrastructure, such as shearing sheds and fencing.</span></li>

                        <li>Education and Training: <span className='font-medium'>Designed to promote the export and marketing of wool products, these grants help wool farmers tap into global markets.</span></li>
                    </ol>
                </ol>
                <p className="text-xl text-left font-medium">In the face of global challenges, government grants serve as a vital lifeline, ensuring that the warmth of wool will continue to grace our lives for generations to come.</p>
            </div>
        </div>
    )
}

export default GovernmentSchemes