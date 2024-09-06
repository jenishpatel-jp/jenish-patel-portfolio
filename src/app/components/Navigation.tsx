'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname();

    const isActive = (pathnameInput: string) => {
        return pathname === pathnameInput ? 'text-blue-500': ''
    }

    return (
        <div className='flex flex-row p-3 justify-end bg-stark text-void drop-shadow-lg ' >
            <Link href={"/"} className={`nav ${isActive('/')} text-2xl`}>Home</Link>
            <Link href={"/about"} className={`nav ${isActive('/about')} text-2xl`}>About</Link>
            <Link href={"../projects"} className={`nav ${isActive('/projects')} text-2xl`}>Projects</Link>
            <Link href={"../contact"} className={`nav ${isActive('/contact')} text-2xl`}>Contact</Link>
        </div>
    )
}

export default Navigation;