'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Button'

function Hero() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const colors = ["text-medify-blue-500", "text-black", "text-black"];
  const imageUrls = [
    "/hero-image/HeroImage1.png",
    "/hero-image/HeroImage2.png",
    "/hero-image/HeroImage3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="hero min-h-full bg-medify-blue-100 padding-x py-8">
      <div className="w-full justify-between hero-content flex-col lg:flex-row gap-20">
        <article className='flex flex-col gap-8 max-w-sm'>
            <h1 className={`${colors[currentColorIndex]} transition duration-1000`}>Simplify,</h1>
            <h1 className={`${colors[(currentColorIndex + 1) % colors.length]} transition duration-1000`}>Integrate,</h1>
            <h1 className={`${colors[(currentColorIndex + 2) % colors.length]} transition duration-1000`}>Elevate.</h1>
          <p className="h4">Sistem kesehatan futuristik untuk kualitas layanan rumah sakit yang lebih baik </p>
          <Button className=' w-min' onClick={() => window.location.href='/formulir'}>DEMO</Button>
        </article>

        <figure className='lg:w-3/4 flex items-end duration-1000 transition-opacity'>
          <Image src={imageUrls[currentImageIndex]} width={1000} height={1200} className=" object-contain" alt='Hero Image' />
        </figure>
      </div>
  </section>
  )
}

export default Hero