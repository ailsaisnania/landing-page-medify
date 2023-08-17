import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constant'

const Footer = () => {
  return (
    <section className='flex-col paddings w-full flex min-h-fit px-8 lg:px-7.5 py-8 lg:py-24 '>
        <div className='flex flex-col  w-full '>
            <Image src="/logo.png" width={176} height={98} alt="logo"/>
        </div>
        <div className='flex flex-wrap gap-16 md:gap-32 mt-10'>
            <div className='flex flex-col gap-4'>
                <h6>PT GLOBAL MEDIKA DIGITAMA</h6>
                <p className='body-2 w-48'>Jl. Bendul Merisi Selatan No. 36A, Kec. Wonocolo Kota Surabaya, Jawa Timur</p>
                <p className='body-2'>+62 812 9595 5675</p>
            </div>
            <div className='flex flex-col gap-4 w-48'>
                <h6 >PERUSAHAAN</h6>
                {NavLinks.map((link) => (
                    <Link className='body-2' href={link.href} key={link.text}>
                    {link.text}
                    </Link>
                ))}

            </div>
            <div className='flex flex-col gap-4 w-48'>
                <h6>MEDIA SOSIAL</h6>
                <div className='flex flex-row gap-4 items-center'>
                    <Link href="/">
                        <div className=" bg-white flex justify-center items-center rounded-full pt-2 px-1 mx-auto">
                            <svg className="h-12 w-12 stroke-medify-blue-500"  
                            viewBox="0 0 24 24"  fill="none"  
                            stroke="#3D6EC6"  
                            strokeWidth="2"  
                            strokeLinecap="round"  
                            strokeLinejoin="round">  
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </div>
                    </Link>

                    <Link href="/">
                        <div className=" bg-medify-blue-500 flex justify-center items-center rounded mt-1 py-2 px-1 mx-auto">
                            <svg className="h-8 w-10 stroke-medify-white"  
                            viewBox="0 0 24 24"  fill="white"   
                            strokeWidth="2"  
                            strokeLinecap="round"  
                            strokeLinejoin="round">  
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  
                            <rect x="2" y="9" width="4" height="12" />  
                            <circle cx="4" cy="4" r="2" /></svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex justify-center w-full mt-12'>
            <p className='body-2'>Copyright Lalalili - 2023</p>
        </div>
    </section>
  )
}

export default Footer