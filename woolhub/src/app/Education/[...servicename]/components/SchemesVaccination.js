import React from 'react'

const SchemesVaccination = () => {
    return (
        <div className='mt-5 mr-10 w-full h-[680px] rounded-md shadow-innerlg overflow-y-scroll scroll'>
            <header className="mx-auto max-w-screen-xl pt-28 text-center">
                <p className="text-gray-500">Published on 21st September, 2023</p>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Optimizing Sheep Feeding for Premium Wool Production</h1>
                <p className="mt-6 text-lg text-gray-700">You're feeding sheeps the wrong way</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Wool Production</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Sheep Farming</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Feeding Sheep</button>
                    <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Livestock Nutrition</button>
                </div>
                <img class="sm:h-[34rem] mt-10 w-full object-contain" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Featured Image" />
            </header>
            <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                <h1 class="text-3xl text-gray-800 font-semibold mb-4 mt-4">Introduction</h1>
                <strong class="text-xl text-left font-medium">Sheep have been our companions in agriculture for thousands of years, providing us with wool for clothing, blankets, and more. To ensure the finest quality wool, it's essential to pay close attention to their diet. In this blog, we'll explore the critical role of sheep feeding in achieving premium wool production. So, let's dive into the world of nutrition, grazing, and the secrets to nurturing your flock for the softest, most luxurious wool.</strong>
                <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">You Are What You Eat: Wool Edition</h2>
                <strong class="text-xl text-left font-medium">Sheep have been our companions in agriculture for thousands of years, providing us with wool for clothing, blankets, and more. To ensure the finest quality wool, it's essential to pay close attention to their diet. In this blog, we'll explore the critical role of sheep feeding in achieving premium wool production. So, let's dive into the world of nutrition, grazing, and the secrets to nurturing your flock for the softest, most luxurious wool.</strong>
                <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    Sheep are natural grazers, and the quality of their pasture significantly impacts wool production. Lush, diverse pastures provide the necessary nutrients for optimal wool growth. Rotational grazing ensures fresh, nutritious forage.
                </div>
                <strong class="text-xl text-left font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi modi officia mollitia doloribus tenetur consectetur quae?</strong>
            </div>
        </div>
    )
}

export default SchemesVaccination