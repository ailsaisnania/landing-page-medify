'use client'
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageUrl = [
  '/logors/Bhirawa Bakti Malang.png',
  '/logors/RS AR Bunda Lubuklinggau.png',
  '/logors/RS Baptis Kediri.png',
  '/logors/RS DKT 05.08.03 Sidoarjo.png',
  '/logors/RS Hj. Bunda Halimah Batam.png',
  '/logors/RS J.H. Awaloei Manado.png',
  '/logors/RS Marinir Ewa Pangalila Surabaya.png',
  '/logors/RS Mata Masyarakat Surabaya.png',
  '/logors/RS Syuhada Haji Blitar.png',
  '/logors/RS TK IV 05.07.02 Kediri.png',
  '/logors/RS Yukum Medical Centre Bandar Jaya.png',
  '/logors/RSAL Dr. Midiyanto Suratani Tanjung Pinang.png',
  '/logors/RSAL Ilyas Tarakan.png',

]

const index = () => {

    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 3,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
              }
            },
        ]
    }

  return (
    <div className='max-w-sm lg:max-w-4xl p-4 space-x-4'>
        <Slider {...slickSettings}>
        {imageUrl.map((image) => ( 
        <Image src={image} alt='logo' width={1000} height={1000} className=' w-28 h-28 lg:w-40 lg:h-40'/>
        ))}
        </Slider>
    </div>
  )
}

export default index