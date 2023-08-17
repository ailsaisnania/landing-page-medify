import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className="hero min-h-screen bg-medify-blue-100 px-8 lg:px-7.5 py-8">
      <div className="w-full justify-between hero-content flex-col lg:flex-row">
        <div className='flex flex-col gap-8 max-w-sm'>
          <h1>Simplify, Integrate, Elevate.</h1>
          <p className="h4">Sistem kesehatan futuristik untuk kualitas layanan rumah sakit yang lebih baik </p>
          <Link href='/'>
            <button className="btn btn-primary">DEMO</button>
          </Link>
        </div>

        <div className=''>
          <Image src="/hero-image/HeroImage2.png" width={687} height={714} className=" object-contain" alt='Hero Image' />
        </div>
      </div>
  </div>
  )
}

export default Hero