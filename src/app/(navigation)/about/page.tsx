import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stark text-void'>
            <h1 className='my-4 text-5xl p-3 w-full text-center underline underline-offset-8 underline-blue' >About</h1>
            <div className='flex flex-col lg:flex-row w-5/6 mx-3 mt-4 mb-7 flex-1 items-center'>
                <div className='flex lg:flex-col items-center lg:w-3/5' >
                    <p className='text-left text-xl lg:mt-10 lg:pt-10'>
                        Driven by a quest for continous self-improvement, I am on a journey to find a fulfilling career that aligns with my passions. 
                        <br/>
                        <br/>
                        I studied Accounting and Finance 
                        in university and gained valuble experience in Customer Service through work experience. 
                        Now I am transitioning into the dynamic world of coding. 
                        <br/>
                        <br/>
                        I am passionate about Javascript, React, and all things web development. I am dedicated to developing apps that enhance efficiency and simplify everyday tasks. 
                        <br/>
                        <br/>
                        In my spare time, I love to travel, explore diverse restaurants and bars around Melbourne, and gaming.
                        <br/>
                        <br/>
                        Feel free to explore my portfolio and see the projects I have been working on! 
                    </p>
                </div>
                <div className='flex flex-col p-2 items-center justify-center mx-5 flex-1'>

                    <div className='flex p-2 mx-2'>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1 flex justify-center flex-col'>
                                <Image 
                                src={'/skills-logo/HTML5-high.png'}
                                width={100}
                                height={100}
                                alt='HTML'
                                className='p-2 m-2 text-void bg-stark'
                                />
                                <p className='hidden lg:inline text-void font-semibold' >HTML</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/css-high.png'}
                                width={100}
                                height={100}
                                alt='CSS'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold' >CSS</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/Javascript.png'}
                                width={100}
                                height={100}
                                alt='Javascript'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold' >Javascript</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>    
                                <Image 
                                src={'/skills-logo/Typescript_logo_2020.svg'}
                                width={100}
                                height={100}
                                alt='Typescript'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Typescript</p>
                            </div>
                        </div>    

                    </div>

                    <div className='flex p-2'>
                    
                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/React.png'}
                                width={100}
                                height={100}
                                alt='React'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>React</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/nextjs-logo.png'}
                                width={100}
                                height={100}
                                alt='Next.JS'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Next.JS</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/tailwind-css.png'}
                                width={100}
                                height={100}
                                alt='Redux'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Tailwind CSS</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/git.png'}
                                width={100}
                                height={100}
                                alt='Git'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Git</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex p-2 my-4'>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/redux.png'}
                                width={100}
                                height={100}
                                alt='Redux'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Redux</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/react-native.png'}
                                width={100}
                                height={100}
                                alt='React Native'
                                className='p-2 m-2'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>React Native</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/expo-go-app.svg'}
                                width={100}
                                height={100}
                                alt='Expo Go'
                                className='p-2 m-2 flex-1'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Expo Go</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/nodejs_light.svg'}
                                width={100}
                                height={100}
                                alt='Expo Go'
                                className='p-2 m-2 flex-1'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>Node.js</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex p-2'>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/postgres.png'}
                                width={100}
                                height={100}
                                alt='Expo Go'
                                className='p-2 m-2 flex-1'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>PostgreSQL</p>
                            </div>
                        </div>

                        <div className='skills' >
                            <div className='bg-stark rounded-lg flex-1'>
                                <Image 
                                src={'/skills-logo/mongodb.svg'}
                                width={100}
                                height={100}
                                alt='MongoDB'
                                className='p-2 m-2 flex-1'
                                />
                                <p className='hidden lg:inline text-void font-semibold'>MongoDB</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Page;