'use client'
import Button from '@/components/Button'
import Gridcard from '@/components/Gridcard'
import Hero from '@/components/Hero'
import { IcrementCount } from '@/components/IcrementCount'
import CarouselRS from '@/components/CarouselRS'
import VideoSection from '@/components/VideoSection'
import SliderTestimoni from '@/components/SliderTestimoni'
import { KelebihanMedify } from '@/constant'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero/>
      <div className='flex flex-col gap-8'>
        <section className=' h-max gradient-blue px-8 lg:px-7.5 py-12'>
          <h4 className='text-center text-medify-white'>Lorem ipsum dolor sit amet</h4>
        </section>
        
        <section>
          <VideoSection/>
        </section>

        <section className='flex flex-col lg:flex-row gap-10 lg:gap-32 screen bg-medify-blue-100'>
          <div className='flex flex-col gap-8'>
            <h2>Kelebihan <span className=' text-medify-blue-500'>Medify </span></h2>
            <p className='body-2 max-w-[15rem]'>Bersama kami untuk layanan lebih baik</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {KelebihanMedify.map((isi) => (
              <Gridcard id={isi.id} src={isi.icon} title={isi.title} subtitle={isi.desc}/>
            ))}
          </div>
        </section>

        <section className='h-auto padding-x lg:py-16 py-10 flex flex-col gap-12 lg:gap-24 justify-center items-center'>
          <h2>Kami Telah <span className=' text-medify-blue-500'>Dipercaya</span></h2>
          <CarouselRS/>
          <div className='flex flex-row gap-12 lg:gap-32'>
              <div className='flex flex-col gap-4 text-center'>
                <IcrementCount start='0' finish='35' plus={1}/>
                <p className='body-2'>Faskes</p>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <IcrementCount start='0' finish='1500' plus={50}/>
                <p className='body-2'>Dokter</p>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className=' text-medify-blue-500'>4 Juta +</h3>
                <p className='body-2'>Pasien</p>
              </div>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className=' text-medify-blue-500'>5 Juta +</h3>
                <p className='body-2'>Kasus</p>
              </div>
          </div>
        </section>

        <SliderTestimoni/>

      </div>

      <section className='h-max gradient-blue px-8 lg:px-7.5 py-8 lg:py-12 flex flex-row justify-between'>
        <h4 className='text-medify-white max-w-sm'>SEGERA DAPATKAN PRODUK KAMI</h4>
        <Link href='/formulir'>
          <Button buttonType='alternate' onClick={() => window.location.href='/formulir'}>DEMO</Button>
        </Link> 
      </section>
    </main>
  )
}
