'use client'

import React from 'react'

const Navigation = () => {
    return (
        <div className='flex flex-row p-3 justify-end bg-stone-800 text-white' >
            <h2 className='nav'>Home</h2>
            <h2 className='nav'>About</h2>
            <h2 className='nav'>Projects</h2>
            <h2 className='nav'>Contact</h2>
        </div>
    )
}

export default Navigation