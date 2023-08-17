import Gridcard from '@/components/Gridcard'
import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero/>
      <div className='flex flex-col gap-8'>
        <div className=' h-max bg-gradient-blue px-8 lg:px-7.5 py-12'>
          <h4 className='text-center text-medify-white'>Lorem ipsum dolor sit amet</h4>
        </div>
        
        <div className='screen flex flex-col text-center justify-center gap-12'>
          <h4>Transformasi Digital <span className=' text-medify-blue-500'>Fasilitas Kesehatan</span></h4>
            <div className='flex justify-center'>
              <Link href=''>
                <Image src='/frameyt.png' width={500} height={178} className='rounded-xl' alt='Thumbnail YT'/>
              </Link>
            </div>
          <p className='body-2 lg:px-32'>Berdasarkan Permenkes No. 24 tahun 2022 (Pasal 45), seluruh fasilitas kesehatan diwajibkan menyelenggarakan Rekam Medis Digital paling lambat 31 Desember 2023.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-32 screen bg-medify-blue-100'>
          <div className='flex flex-col gap-8'>
            <h2>Kelebihan <span className=' text-medify-blue-500'>Medify </span></h2>
            <p className='body-2 max-w-[15rem]'>Bersama kami untuk layanan lebih baik</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Gridcard src={'/icon/analytics.svg'} title={'ANALYTICS'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>
            <Gridcard src={'/icon/aipowered.svg'} title={'AI-POWERED'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>
            <Gridcard src={'/icon/integrated.svg'} title={'INTEGRATED SYSTEM'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>
            <Gridcard src={'/icon/userfriendly.svg'} title={'USER FRIENDLY'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>
          </div>
        </div>

        <div className='screen flex flex-col gap-24 justify-center items-center'>
          <h2>Kami Telah <span className=' text-medify-blue-500'>Dipercaya</span></h2>
        </div>

        <div className='screen bg-medify-blue-100'>

        </div>
      </div>
      <div className='h-max bg-gradient-blue px-8 lg:px-7.5 py-8 lg:py-12 flex flex-row justify-between'>
        <h4 className='text-medify-white max-w-sm'>SEGERA DAPATKAN PRODUK KAMI</h4>
        <Link href='/formulir'>
          <button className="btn btn-secondary">DEMO</button>
        </Link> 
      </div>
    </main>
  )
}
