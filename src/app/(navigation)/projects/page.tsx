import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stark text-void'>
            <h1 className='my-4 text-5xl p-3 w-full text-center underline underline-offset-8 underline-blue'>Projects</h1>

            
            <div className="carousel w-full">

                {/* Slide 1 Todo board */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='justify-center items-center flex flex-col flex-1'>
                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg m-2 hover:bg-gradient-to-bl'>
                            <Image
                                        src={"/project-screenshots/todo screenshot.png"}
                                        alt="Screenshot of the Todo web app"
                                        width={1000}
                                        height={600}
                                        className='items-center justify-center p-2'
                            />
                        </div>
                        <div className='flex flex-col p-2  items-center justify-center flex-1'>
                            <h2 className='text-4xl p-2 font-medium' >To-do board</h2>
                            <p className='p-2 text-lg mt-3' >Full stack application of a todo board built with Next.js, React, Clerk, Mongodb, Mongoose and Atlas.</p>
                            <p className='p-2 text-lg' >You will need to login with your Google account or create an account with your email address in order to access the Todo board as each user has access to their own todo&apos;s.</p>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-400 rounded-md' href={'https://todo-list-m01h0usmu-jenishspatels-projects.vercel.app/'} target='_blank'>LIVE APP</Link>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-400 rounded-md' href={'https://github.com/jenishpatel-jp/to-do-list'} target='_blank'>LEARN MORE</Link>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex transform -translate-y-1/2 justify-between">
                            <a href="#slide4" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❯</a>
                        </div>
                    </div>
                </div>

                {/* Slide 2 Shopping Run */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='justify-center items-center flex flex-col flex-1' >

                        <div className='mockup-phone' >
                            <div className='camera'></div>
                            <div className='display'>
                                <div className='artboard artboard-demo phone-1'>
                                    <Image
                                    src={"/project-screenshots/Shopping run.png"}
                                    alt="Screenshot of the Shopping Run app"
                                    width={300}
                                    height={300}
                                    className=' justify-center w-full'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col p-2  items-center justify-center flex-1'>
                            <h2 className='text-4xl p-2 font-medium' >Shopping Run</h2>
                            <p className='p-2 text-lg mt-3' >A mobile application created using Expo and React Native for your shopping run. The app allows you to separate items based on the stores you&apos;re going to.</p>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-400 rounded-md' href={'/projects/shopping-run'} replace>LIVE APP</Link>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-400 rounded-md' href={'https://github.com/jenishpatel-jp/shopping-run-2'} target='_blank'>LEARN MORE</Link>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❯</a>
                    </div>
                </div>

                {/* Slide 3 Reddit app*/}
                <div id="slide3" className="carousel-item relative w-full">

                <div className='justify-center items-center flex flex-col flex-1'>
                    <div className='flex items-center justify-center p-2 rounded-md flex-1'>

                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg m-2 hover:bg-gradient-to-bl' >
                            <Image
                                src={"/project-screenshots/Reddit app screenshot.png"}
                                alt="Screenshot of the Reddit mini app"
                                width={1000}
                                height={600}
                                className='items-center justify-center p-2'
                            />
                        </div>
                        
                    </div>
                    <div className='flex flex-col p-2 items-center justify-center flex-1'>
                        <h2 className='text-4xl p-2 font-medium' >Reddit mini</h2>
                        <p className='p-2 text-lg mt-3' >A Reddit integrated web application built using Next.js and NextAuth.js</p>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-500 rounded-md' href={'https://reddit-mini-five.vercel.app/'} target='_blank'>LIVE APP</Link>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-500 rounded-md' href={'https://github.com/jenishpatel-jp/reddit-mini'} target='_blank'>LEARN MORE</Link>
                    </div>
                </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❯</a>
                    </div>
                </div>

                {/* Slide 4 Jammming*/}

                <div id="slide4" className="carousel-item relative w-full">
                    <div className='justify-center items-center flex flex-col flex-1'>

                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg m-2 hover:bg-gradient-to-bl'>
                            <Image
                                src={"/project-screenshots/Jammming screenshot.png"}
                                alt="Screenshot of the Jammming app"
                                width={1000}
                                height={600}
                                className='items-center justify-center p-2'
                            />
                        </div>

                        <div className='flex flex-col p-2 items-center justify-center flex-1'>
                            <h2 className='text-4xl p-2 font-medium' >Jammming</h2>
                            <p className='p-2 text-lg mt-3' >A Spotify integrated web application built using Next.js and NextAuth.js allowing you to create a new playlist on your Spotify account.</p>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-500 rounded-md' href={'https://jammming-spotify-project.vercel.app/'} target='_blank'>LIVE APP</Link>
                            <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-blue hover:bg-blue-500 rounded-md' href={'https://github.com/jenishpatel-jp/jammming-spotify-project'} target='_blank'>LEARN MORE</Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-white shadow-lg hover:border-blue-500">❯</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page