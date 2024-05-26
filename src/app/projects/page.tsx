import React from 'react'
import Link from 'next/link'

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white'>
            <h1 className='my-4 text-5xl p-3 w-full text-center'>Projects</h1>
            <div className='grid grid-cols-2 grid-rows-3 gap-4 flex-1 p-2 border w-5/6 text-center'>
                <div className='border'>
                    <h2>Jamming</h2>
                </div>
                <div className='flex flex-col p-2 border'>
                    <p className='p-2 text-lg mt-3' >A web app application that integrates with Spotify, allowing you to search for songs on the platform and create a new playlist on your Spotify account.</p>
                    <Link className='p-2 m-2 text-xl' href={'https://jammming-spotify-project.vercel.app/'} target='_blank'>LIVE APP</Link>
                    <Link className='p-2 m-2 text-xl' href={'https://github.com/jenishpatel-jp/jammming-spotify-project'} target='_blank'>LEARN MORE</Link>
                </div>
                <div className='border'>
                    <h2>Reddit mini</h2>
                </div>
                <div className='flex flex-col p-2 border'>
                    <p className='p-2 text-lg mt-3' >A web application that integrates with Reddit, fetching Reddit posts and has a sidebar allowing you to navigate from the selected subreddits.</p>
                    <Link className='p-2 m-2 text-xl' href={'https://reddit-mini-five.vercel.app/'} target='_blank'>LIVE APP</Link>
                    <Link className='p-2 m-2 text-xl' href={'https://github.com/jenishpatel-jp/reddit-mini'} target='_blank'>LEARN MORE</Link>
                </div>
                <div className='border'>
                    <h2>Shopping Run</h2>
                </div>
                <div className='flex flex-col p-2 border'>
                    <p className='p-2 text-lg mt-3' >A mobile application created for your shopping run. The app allows you to separate items based on the stores you're going to.</p>
                    <Link className='p-2 m-2 text-xl' href={''} target='_blank'>LIVE APP</Link>
                    <Link className='p-2 m-2 text-xl' href={'https://github.com/jenishpatel-jp/shopping-run'} target='_blank'>LEARN MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Page