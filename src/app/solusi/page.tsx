import Image from 'next/image'
import Link from 'next/link'
import Pagetitle from '@/components/Pagetitle';

export default function Home() {
    return (
      <main className='overflow-hidden'>
        <Pagetitle
          page = 'Solusi'/>  

        <div className='flex flex-col w-full'>
          <div className='grid grid-cols-2 gap-16 px-32 py-16'>
              <Image src="/slideSolusi/slide1.png" width={500} height={250} alt='product'/>
              <div className='flex flex-col gap-12'>
                  <h2 className=' w-[70%]'>Satu Aplikasi <span className=' text-medify-blue-500'>Untuk semua kebutuhan.</span></h2>
                  <p className='body-2'>
                  Mulai dari Administrasi,Pelayanan, E Rekam MedisHingga KeuanganSemua Tersedia di Medify
                  </p>
              </div>
          </div>
          <div className='grid grid-cols-2 gap-16 px-32 py-16 bg-medify-blue-100'>
              <div className='flex flex-col gap-12 justify-center'>
                  <h2 className='w-[70%]'>Lorem <span className='text-medify-blue-500'>Ipsum.</span></h2>
                  <p className='body-2'>
                  Mulai dari Administrasi,Pelayanan, E Rekam MedisHingga KeuanganSemua Tersedia di Medify
                  </p>
              </div>
              <Image src="/slideSolusi/slide2.png" width={500} height={250} alt='product'/>
          </div>
          <div className='grid grid-cols-2 gap-16 px-32 py-16'>
              <Image src="/slideSolusi/slide3.png" width={500} height={250} alt='product'/>
              <div className='flex flex-col gap-12 justify-center'>
                  <h2 className='w-[70%]'>Lorem <span className='text-medify-blue-500'>Ipsum.</span></h2>
                  <p className='body-2'>
                  Mulai dari Administrasi,Pelayanan, E Rekam MedisHingga KeuanganSemua Tersedia di Medify
                  </p>
              </div>
          </div>
          <div className='grid grid-cols-2 gap-16 px-32 py-16 bg-medify-blue-100'>
              <div className='flex flex-col gap-12 justify-center'>
                  <h2 className='w-[70%]'>Lorem <span className='text-medify-blue-500'>Ipsum.</span></h2>
                  <p className='body-2'>
                  Mulai dari Administrasi,Pelayanan, E Rekam MedisHingga KeuanganSemua Tersedia di Medify
                  </p>
              </div>
              <Image src="/slideSolusi/slide2.png" width={500} height={250} alt='product'/>
          </div>
        </div>
      </main>
    )
}