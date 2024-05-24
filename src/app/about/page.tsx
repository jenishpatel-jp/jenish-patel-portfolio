import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl border p-3 w-full text-center' >About</h1>
            <div className='flex border w-5/6 mx-3 mt-4 mb-7 flex-1'>
                <div className='border flex flex-col items-center flex-1' >
                    <div className='w-30 h-30 p-3 my-4 border'>
                        <p>Image</p>
                    </div>
                    <p className='text-left'>
                        I&apos;m a Front End Engineer with a passion for creating apps that make life easier. 
                        <br/>
                        I enjoy creating apps that solve issues using React and React Native.
                        <br/>
                        On a quest to continously learn and improve my skills so I can write better code.
                        <br/>
                        In my spare time I enjoy travelling, going to different restaurants/bars and gaming. 
                    </p>
                </div>
                <div className='border grid grid-cols-3 grid-rows-3 gap-4 flex-1 p-2'>
                    <p className='skills'>HTML</p>
                    <p className='skills'>CSS</p>
                    <p className='skills'>Javascript</p>
                    <p className='skills'>React</p>
                    <p className='skills'>Next.JS</p>
                    <p className='skills'>React Native</p>
                    <span></span>
                    <p className='skills'>Git</p>
                    <p className='skills'>Redux</p>
                </div>
            </div>
        </div>
    )
}

export default Page