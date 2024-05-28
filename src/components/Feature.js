import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Feature = () => {
    return (
        <section name='feature' className='w-full my-32'>

            <div className='max-w-[1240px] mx-auto px-2'>

                <h2 className='text-5xl font-bold text-center'>Features</h2>

                <p className='py-8 text-2xl text-center text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>

                    <div className='flex'>
                        <div>
                            <FaCheck className='mt-1 mr-3 text-blue-600 w-7' />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Real-time</h3>
                            <p className='pt-3 pb-4 text-lg'> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <FaCheck className='mt-1 mr-3 text-blue-600 w-7' />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Real-time</h3>
                            <p className='pt-3 pb-4 text-lg'> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <FaCheck className='mt-1 mr-3 text-blue-600 w-7' />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Real-time</h3>
                            <p className='pt-3 pb-4 text-lg'> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <FaCheck className='mt-1 mr-3 text-blue-600 w-7' />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Real-time</h3>
                            <p className='pt-3 pb-4 text-lg'> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>


                </div>

            </div>


        </section>
    )
}

export default Feature
