'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname();

    const isActive = (pathnameInput: string) => {
        return pathname === pathnameInput ? 'text-fuchsia-600': ''
    }

    return (
        <div className='flex flex-row p-3 justify-end bg-zinc-950 text-white' >
            <Link href={"/"} className={`nav ${isActive('/')}`}>Home</Link>
            <Link href={"/about"} className={`nav ${isActive('/about')}`}>About</Link>
            <Link href={"../projects"} className={`nav ${isActive('/projects')}`}>Projects</Link>
            <Link href={"../contact"} className={`nav ${isActive('/contact')}`}>Contact</Link>
        </div>
    )
}

export default Navigation;