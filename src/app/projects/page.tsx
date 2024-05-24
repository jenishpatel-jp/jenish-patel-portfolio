import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl p-3 w-full text-center'>Projects</h1>
            <div className='grid grid-cols-2 grid-rows-3 gap-4 flex-1 p-2 border w-5/6 text-center'>
                <div className='border'>
                    <h2>Jamming</h2>
                </div>
                <div className='border'>
                    <p>Info about jamming</p>
                </div>
                <div className='border'>
                    <h2>Reddit mini</h2>
                </div>
                <div className='border'>
                    <p>Info about reddit mini</p>
                </div>
                <div className='border'>
                    <h2>Shopping Run</h2>
                </div>
                <div className='border'>
                    <p>Info about shopping run</p>
                </div>
            </div>
        </div>
    )
}

export default Page