import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl border p-3 w-full text-center' >About</h1>
            <div className='flex border w-5/6 mx-3 mt-4 mb-7 flex-1'>
                <div className='border flex flex-col items-center flex-1' >
                    <p>Image</p>
                    <p>I'm a Front End Engineer with a passion for continous improvement.</p>
                </div>
                <div className='border flex flex-1'>

                </div>
            </div>
        </div>
    )
}

export default Page