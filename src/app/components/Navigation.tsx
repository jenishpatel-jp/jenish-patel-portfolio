'use client'

import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className='flex flex-row p-3 justify-end bg-stone-800 text-white' >
            <Link href={"/"} className='nav'>Home</Link>
            <Link href={"/about"} className='nav'>About</Link>
            <Link href={"../projects"} className='nav'>Projects</Link>
            <Link href={"../contact"} className='nav'>Contact</Link>
        </div>
    )
}

export default Navigation