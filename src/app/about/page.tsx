import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl p-3 w-full text-center' >About</h1>
            <div className='flex w-5/6 mx-3 mt-4 mb-7 flex-1'>
                <div className='flex flex-col items-center flex-1' >
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
                <div className='grid grid-cols-3 grid-rows-3 gap-4 flex-1 p-2'>
                    <div className='skills' >
                        <Image 
                        src={'/HTML5-high.png'}
                        width={150}
                        height={150}
                        alt='HTML'
                        className='p-2 m-2'
                        />
                        <p>HTML</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/css-high.png'}
                        width={150}
                        height={150}
                        alt='CSS'
                        className='p-2 m-2'
                        />
                        <p>CSS</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/Javascript.png'}
                        width={150}
                        height={150}
                        alt='Javascript'
                        className='p-2 m-2'
                        />
                        <p>Javascript</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/React.png'}
                        width={150}
                        height={150}
                        alt='React'
                        className='p-2 m-2'
                        />
                        <p>React</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/Nextjs.png'}
                        width={150}
                        height={150}
                        alt='Next.JS'
                        className='p-2 m-2'
                        />
                        <p>Next.JS</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/react-native.png'}
                        width={150}
                        height={150}
                        alt='React Native'
                        className='p-2 m-2'
                        />
                        <p>React Native</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/git.png'}
                        width={150}
                        height={150}
                        alt='Git'
                        className='p-2 m-2'
                        />
                        <p>Git</p>
                    </div>
                    <div className='skills' >
                        <Image 
                        src={'/redux.png'}
                        width={150}
                        height={150}
                        alt='Redux'
                        className='p-2 m-2'
                        />
                        <p>Redux</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page