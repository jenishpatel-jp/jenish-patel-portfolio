import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-zinc-900 text-white'>
            <h1 className='my-4 text-5xl p-3 w-full text-center underline underline-offset-8 underline-fuchsia'>Projects</h1>
            <div className='flex flex-col mb-4 mt-2 p-2 w-5/6 text-center'>
                <div className='flex flex-col lg:flex-row mb-8' >
                    <div className='flex  justify-center items-center flex-1'>
                    <Image
                            src={"/project-screenshots/todo.png"}
                            alt="Screenshot of the Todo web app"
                            width={900}
                            height={500}
                            className=' justify-center'
                        />
                    </div>
                    <div className='flex flex-col p-2  items-center justify-center flex-1'>
                        <h2 className='text-4xl p-2 font-medium' >Todo board</h2>
                        <p className='p-2 text-lg mt-3' >Full stack application of a todo board built with Next.js, React, Clerk, Mongodb, Mongoose and Atlas.</p>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://todo-list-ouwon6bdv-jenishspatels-projects.vercel.app/'} target='_blank'>LIVE APP</Link>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://github.com/jenishpatel-jp/to-do-list'} target='_blank'>LEARN MORE</Link>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row mb-8' >
                    <div className='flex  justify-center items-center flex-1'>
                    <Image
                            src={"/project-screenshots/Shopping run screenshot.png"}
                            alt="Screenshot of the Shopping Run app"
                            width={300}
                            height={600}
                            className=' justify-center'
                        />
                    </div>
                    <div className='flex flex-col p-2  items-center justify-center flex-1'>
                        <h2 className='text-4xl p-2 font-medium' >Shopping Run</h2>
                        <p className='p-2 text-lg mt-3' >A mobile application created using Expo and React Native for your shopping run. The app allows you to separate items based on the stores you&apos;re going to.</p>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'/projects/shopping-run'} replace>LIVE APP</Link>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://github.com/jenishpatel-jp/shopping-run-2'} target='_blank'>LEARN MORE</Link>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row mb-8'>
                    <div className='flex items-center justify-center p-2 rounded-md flex-1'>
                        <Image
                            src={"/project-screenshots/Reddit mini screenshot.png"}
                            alt="Screenshot of the Reddit mini app"
                            width={900}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col p-2 items-center justify-center flex-1'>
                        <h2 className='text-4xl p-2 font-medium' >Reddit mini</h2>
                        <p className='p-2 text-lg mt-3' >A Reddit integrated web application built using Next.js and NextAuth.js</p>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://reddit-mini-five.vercel.app/'} target='_blank'>LIVE APP</Link>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://github.com/jenishpatel-jp/reddit-mini'} target='_blank'>LEARN MORE</Link>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row mb-8'>
                    <div className='flex items-center justify-center p-2  flex-1'>
                        <Image
                            src={"/project-screenshots/Jammming screenshot.png"}
                            alt="Screenshot of the Jammming app"
                            width={900}
                            height={500}
                        />
                    </div>
                    <div className='flex flex-col p-2 items-center justify-center flex-1'>
                        <h2 className='text-4xl p-2 font-medium' >Jammming</h2>
                        <p className='p-2 text-lg mt-3' >A Spotify integrated web application built using Next.js and NextAuth.js allowing you to create a new playlist on your Spotify account.</p>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://jammming-spotify-project.vercel.app/'} target='_blank'>LIVE APP</Link>
                        <Link className='p-2 m-2 text-xl underline underline-offset-8 underline-fuchsia hover:bg-fuchsia-600 rounded-md' href={'https://github.com/jenishpatel-jp/jammming-spotify-project'} target='_blank'>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page