'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Navbar() {
  return (
    <header className="drawer drawer-end shadow-y">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <section className="drawer-content flex flex-col">
            {/* Navbar */}
            <section className="w-full navbar px-8 lg:px-7.5">
                <figure className="flex-1 px-2 mx-2">
                    <Link href='/'>
                        <Image className="h-auto w-auto" src='/logo.png' width={165} height={93} alt='Logo Medify'/>
                    </Link>
                </figure>
                <nav className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal body-2 gap-8">
                        {NavLinks.map((link) => (
                            <Link className='hover:text-medify-blue-500' id={link.id} href={link.href} key={link.id}>
                            {link.text}
                            </Link>
                        ))}
                    </ul>
                </nav>
                <div className='flex-none hidden lg:block ml-10'>
                    <Button onClick={() => window.location.href='/formulir'}>DEMO</Button>
                </div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <FontAwesomeIcon className=' text-medify-blue-500 w-8 h-8' icon={faBars} />
                    </label>
                </div> 
            </section>
        </section> 
        
        <section className="drawer-side z-20">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <nav className="px-8 py-4 w-10/12 h-full bg-medify-white flex flex-col items-center">
                <ul className="menu body-1 font-bold gap-8 text-center">
                    {NavLinks.map((link) => (
                        <Link className='hover:text-medify-blue-500' id={link.id} href={link.href} key={link.id}>
                        {link.text}
                        </Link>
                    ))}
                </ul>
                <div className='mt-8'>
                    <Button onClick={() => window.location.href='/formulir'}>DEMO</Button>
                </div>
            </nav>
        </section>
    </header>
  )
}

export default Navbar