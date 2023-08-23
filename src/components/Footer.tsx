import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='flex-col paddings w-full flex max-h-min padding-x py-8 lg:py-16 shadow-y'>
        <figure className='flex flex-col  w-full '>
            <Image src="/logo.png" className="h-auto w-48" width={176} height={98} alt="logo"/>
        </figure>
        <div className='flex flex-wrap gap-16 md:gap-32 mt-10'>
            <div className='flex flex-col gap-4'>
                <h6>PT GLOBAL MEDIKA DIGITAMA</h6>
                <p className='body-2 w-48'>Jl. Bendul Merisi Selatan No. 36A, Kec. Wonocolo Kota Surabaya, Jawa Timur</p>
                <p className='body-2'>+62 812 9595 5675</p>
            </div>
            <nav className='flex flex-col gap-4 w-48 '>
                <h6 >PERUSAHAAN</h6>
                {NavLinks.map((link) => (
                    <Link className='body-2 hover:text-medify-blue-500' id={link.id} href={link.href} key={link.id}>
                    {link.text}
                    </Link>
                ))}

            </nav>
            <figure className='flex flex-col gap-4 w-48'>
                <h6>MEDIA SOSIAL</h6>
                <div className='flex flex-row gap-4 items-center'>
                    <Link href="/">
                        <FontAwesomeIcon className='w-8 h-8 lg:w-12 lg:h-12 text-medify-blue-500' icon={faInstagram} />
                    </Link>

                    <Link href="/">
                        <FontAwesomeIcon className='w-8 h-8 lg:w-12 lg:h-12 text-medify-blue-500' icon={faLinkedin} />
                    </Link>
                </div>
            </figure>
        </div>
        <div className='flex justify-center w-full mt-12'>
            <p className='body-2'>Copyright Lalalili - 2023</p>
        </div>
    </footer>
  )
}

export default Footer