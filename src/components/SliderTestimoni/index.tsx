'use client'

import {useState} from 'react'
import Slider from 'react-slick'
import { TestimoniCard } from '@/constant'
import Arrow from '../Arrow'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 2,
    autoplay: false,
    slidesToScroll: 1,
    infinite: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                speed: 900,
          }
        },
    ]
  }

  return (
    <section className='content h-auto px-8 lg:px-7.5 bg-medify-blue-100'>
        <div className='lg:absolute lg:z-10 max-w-[15rem] lg:max-w-md h-max mt-10 lg:shadow-x flex flex-wrap bg-medify-blue-100 gap-4 lg:gap-12 lg:pl-16 lg:py-4 lg:ml-[60rem]'>
            <h2>Apa Yang <span className=' text-medify-blue-500'> Mereka Katakan</span></h2>
            <p className='body-2 mr-32'>Testimoni para dokter</p>
            <Arrow arrowDirect='left' onClick={sliderRef?.slickPrev}/>
            <Arrow arrowDirect='right' onClick={sliderRef?.slickNext}/>
        </div>
        <div className='w-full lg:w-3/4 my-10 lg:my-32'>
            <Slider ref={setSliderRef} {...sliderSettings}>
                {TestimoniCard.map((testimoni) => (
                <div key={testimoni.id} className='!grid grid-rows-4 gap-8 bg-medify-white max-w-md min-h-[300px] lg:min-h-[500px] rounded-2xl shadow-md '>
                    <div className='p-10 row-span-4'>
                        <p className='body-2'>{testimoni.testimoni}</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center py-5 bg-medify-blue-100 rounded-b-2xl h-max'>
                        <Image src={testimoni.avatar} width={1000} height={1000} className='w-14 h-14 rounded-full bg-medify-gray-100' alt={testimoni.alt} />
                        <p className='text-sm'>{testimoni.name}</p>
                        <p className='text-sm'>{testimoni.rumahSakit}</p>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}