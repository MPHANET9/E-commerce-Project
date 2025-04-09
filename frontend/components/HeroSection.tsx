import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full flex bg-gray-100 items-center justify-between'>
            {/**Content Section */}
            <div className='container w-[60%] justify-center items-center py-12'>
                <div className='text-center px-8'>
                    <h2 className='text-4xl font-bold text-emerald-500 mb-2 tracking-wide'>WHOLESOME CUP</h2>
                    <h4 className='text-xl font-medium text-gray-700 mb-1'>Sip, Relax and Enjoy</h4>
                    <h6 className='text-md text-gray-500 italic mb-4'>More Than a Drink, It's a Feeling</h6>
                    <p className='text-base text-gray-600'>
                        Wholesome Cup was created with one simple belief, that food and drink can be healing.
                        We combine the goodness of real ingredients with the warrain of human connection - crafting
                        experience that feeds both the body and soul.
                    </p>
                </div>
            </div>
            {/**Image Section */}
            <div className='w-[40%] flex justify-center items-center gap-4 translate-y-6'>
                {/**Column 1 - Single Centered Image */}
                <div className='flex justify-center items-center h-full'>
                    <div className='h-40 w-32 bg-gray-500 flex items-center justify-center rounded-md shadow translate-y-7'>
                        Image1
                    </div>
                </div>
                {/**Column 2 - Stacked Images */}
                <div className='flex flex-col justify-center items-center gap-2 translate-y-7'>
                    <div className='h-36 w-32 bg-gray-500 flex items-center justify-center rounded-md shadow'>
                        Image2.1
                    </div>
                    <div className='h-36 w-32 bg-gray-500 flex items-center justify-center rounded-md shadow '>
                        Image2.2
                    </div>
                </div>
                {/**Column 3 - Three Stagged Images with slight ofset */}
                <div className='flex flex-col justify-center items-center gap-2 -translate-y-7'>
                    <div className='h-36 w-32 bg-gray-500 flex items-center justify-center  rounded-md shadow '>
                        Image3.3
                    </div>
                    <div className='h-36 w-32 bg-gray-500 flex items-center justify-center rounded-md shadow '>
                        Image3.2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
