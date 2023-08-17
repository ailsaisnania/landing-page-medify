import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constant'

function Navbar() {
  return (
    <div className="drawer drawer-end shadow-y">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar px-8 lg:px-7.5">
                <div className="flex-1 px-2 mx-2">
                    <Link href='/'>
                        <Image src='/logo.png' width={165} height={93} alt='Logo Medify'/>
                    </Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal body-2 gap-8">
                        {NavLinks.map((link) => (
                            <Link className='hover:text-medify-blue-500' href={link.href} key={link.id}>
                            {link.text}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='flex-none hidden lg:block ml-10'>
                    <Link href='/formulir'>
                        <button className="btn btn-primary">DEMO</button>
                    </Link>
                </div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            className="inline-block w-8 h-8 stroke-medify-blue-500">
                            <path strokeLinecap="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </label>
                </div> 
            </div>
        </div> 
        
        <div className="drawer-side z-20">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <div className="px-8 py-4 w-10/12 h-full bg-medify-white flex flex-col items-center">
                <ul className="menu body-1 font-bold gap-8 text-center">
                    {NavLinks.map((link) => (
                        <Link className='hover:text-medify-blue-500' href={link.href} key={link.id}>
                        {link.text}
                        </Link>
                    ))}
                </ul>
                <div className='mt-8'>
                    <Link href='/formulir'>
                        <button className="btn btn-primary">DEMO</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar