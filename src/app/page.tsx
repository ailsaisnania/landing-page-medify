import Button from '@/components/Button'
import Gridcard from '@/components/Gridcard'
import Hero from '@/components/Hero'
import { KelebihanMedify } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero/>
      <div className='flex flex-col gap-8'>
        <section className=' h-max gradient-blue px-8 lg:px-7.5 py-12'>
          <h4 className='text-center text-medify-white'>Lorem ipsum dolor sit amet</h4>
        </section>
        
        <section className='screen flex flex-col text-center justify-center gap-12'>
          <h4>Transformasi Digital <span className=' text-medify-blue-500'>Fasilitas Kesehatan</span></h4>
            <div className='flex justify-center'>
              <Link href=''>
                <Image src='/frameyt.png' width={500} height={178} className='rounded-xl' alt='Thumbnail YT'/>
              </Link>
            </div>
          <p className='body-2 lg:px-32'>Berdasarkan Permenkes No. 24 tahun 2022 (Pasal 45), seluruh fasilitas kesehatan diwajibkan menyelenggarakan Rekam Medis Digital paling lambat 31 Desember 2023.</p>
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

        <section className='screen flex flex-col gap-24 justify-center items-center'>
          <h2>Kami Telah <span className=' text-medify-blue-500'>Dipercaya</span></h2>
        </section>

        <section className='screen bg-medify-blue-100'>

        </section>

      </div>

      <section className='h-max gradient-blue px-8 lg:px-7.5 py-8 lg:py-12 flex flex-row justify-between'>
        <h4 className='text-medify-white max-w-sm'>SEGERA DAPATKAN PRODUK KAMI</h4>
        <Link href='/formulir'>
          <Button buttonType='alternate'>DEMO</Button>
        </Link> 
      </section>
    </main>
  )
}
