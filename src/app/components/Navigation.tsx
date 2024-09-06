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
            <Link href={"/"} className={`nav ${isActive('/')} lg:text-2xl text-lg`}>Home</Link>
            <Link href={"/about"} className={`nav ${isActive('/about')} lg:text-2xl text-lg`}>About</Link>
            <Link href={"../projects"} className={`nav ${isActive('/projects')} lg:text-2xl text-lg`}>Projects</Link>
            <Link href={"../contact"} className={`nav ${isActive('/contact')} lg:text-2xl text-lg`}>Contact</Link>
        </div>
    )
}

export default Navigation;