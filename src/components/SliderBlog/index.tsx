'use client'

import {useState} from 'react'
import Slider from 'react-slick'
import { SliderBlog } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    infinite: true,
  }

  return (
    <section className='content h-auto'>
        <Slider ref={setSliderRef} {...sliderSettings}>
            {SliderBlog.map((blog) => (
                <Link href={'/blogDetail'}>
                <div key={blog.id}>
                    <div className='absolute z-10 flex flex-col flex-wrap py-10 px-4 lg:px-16 bottom-0 max-w-xs lg:max-w-none'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <Image src={blog.profileImage} width={500} height={500} className='w-5 h-5 lg:w-10 lg:h-10 rounded-full' alt={blog.altProfile}/>
                            <p className='text-xs lg:text-sm text-medify-white'>{blog.author}</p>
                            <p className='pb-4 text-medify-white'>.</p>
                            <p className='text-xs lg:text-sm text-medify-white'>{blog.post}</p>
                        </div>
                        <div className='flex flex-wrap lg:max-w-5xl text-start'>
                            <p className='text-xs lg:text-sm text-medify-white'>
                                {blog.desc}
                            </p>
                        </div>
                    </div>
                    <Image src={blog.image} width={1000} height={500} alt={blog.alt} className='w-full h-72 lg:h-96 object-cover opacity-80'/>
                </div>
                </Link>
            ))}
        </Slider>
    </section>
  )
}