import React from 'react'

const Feedback = () => {
    const image = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc';
    return (
        <section name='testimonials' className='w-full my-24 text-white bg-slate-700'>

            <div className='max-w-6xl px-5 mx-auto text-center py-12'>

                <h2 className='text-4xl font-bold'>Testimonials</h2>

                <p className='py-8 text-2xl text-white'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>

                    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
                        <img src={image} className='w-16 -mt-14 rounded-full' alt='person' />
                        <h5 className='text-lg font-bold'>Ali Ko</h5>
                        <p className='text-sm'>
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>

                    <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
                        <img src={image} className='w-16 -mt-14 rounded-full' alt='person' />
                        <h5 className='text-lg font-bold'>Ali Ko</h5>
                        <p className='text-sm'>
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>

                    <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
                        <img src={image} className='w-16 -mt-14 rounded-full' alt='person' />
                        <h5 className='text-lg font-bold'>Ali Ko</h5>
                        <p className='text-sm'>
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>


                </div>




                <button className='px-6 py-3 my-8 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-100'>Get Started</button>

            </div>

        </section>
    )
}

export default Feedback
