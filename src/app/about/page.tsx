import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl p-3 w-full text-center underline underline-offset-8 underline-orange' >About</h1>
            <div className='flex flex-col lg:flex-row w-5/6 mx-3 mt-4 mb-7 flex-1'>
                <div className='flex lg:flex-col items-center justify-center flex-1' >
                    <p className='text-left text-xl'>
                        I&apos;m on the quest of continous self improvement and finding a career that I enjoy. 
                        <br/>
                        <br/>
                        I studied Accounting and Finance in Universtiy, worked in Customer Service, and now trying to get into the world of coding. 
                        <br/>
                        <br/>
                        I have a passion for Javascript, React, React Native and making apps that make life easier and efficient.
                        <br/>
                        <br/>
                        In my spare time I enjoy travelling, going to different restaurants/bars and gaming. 
                    </p>
                </div>
                <div className='flex flex-col p-2 items-center justify-center'>
                    <div className='flex p-2 my-4'>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/HTML5-high.png'}
                            width={150}
                            height={150}
                            alt='HTML'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline' >HTML</p>
                        </div>
                        <div className='skills' >
                        <Image 
                        src={'/skills-logo/css-high.png'}
                        width={150}
                        height={150}
                        alt='CSS'
                        className='p-2 m-2'
                        />
                        <p className='hidden lg:inline' >CSS</p>
                        </div>
                        <div className='skills' >
                        <Image 
                        src={'/skills-logo/Javascript.png'}
                        width={150}
                        height={150}
                        alt='Javascript'
                        className='p-2 m-2'
                        />
                        <p className='hidden lg:inline' >Javascript</p>
                        </div>      
                    </div>
                    <div className='flex p-2 my-4'>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/Typescript_logo_2020.svg'}
                            width={150}
                            height={150}
                            alt='Redux'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>Typescript</p>
                        </div>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/React.png'}
                            width={150}
                            height={150}
                            alt='React'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>React</p>
                        </div>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/nextjs-logo.png'}
                            width={150}
                            height={150}
                            alt='Next.JS'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>Next.JS</p>
                        </div>
                    </div>
                    <div className='flex p-2 my-4'>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/react-native.png'}
                            width={150}
                            height={150}
                            alt='React Native'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>React Native</p>
                        </div>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/git.png'}
                            width={150}
                            height={150}
                            alt='Git'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>Git</p>
                        </div>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/redux.png'}
                            width={150}
                            height={150}
                            alt='Redux'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>Redux</p>
                        </div>
                    </div>
                    <div className='flex p-2 my-4'>
                        <div className='skills' >
                            <Image 
                            src={'/skills-logo/tailwind-css.png'}
                            width={150}
                            height={150}
                            alt='Redux'
                            className='p-2 m-2'
                            />
                            <p className='hidden lg:inline'>Tailwind CSS</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Page;