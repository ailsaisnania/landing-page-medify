import React from 'react'
import Image from 'next/image'
import Pagetitle from '@/components/Pagetitle'
import Lowongan from '@/components/Lowongan'
import { LowonganJob } from '@/constant'

function page() {
  return (
    <main>
      <Pagetitle page={'Karier'}/>
      <header className='padding-x py-10'>
        <div className='flex flex-col lg:flex-row gap-20 justify-center items-center'>
          <figure>
            <Image src={'/background.png'} width={1000} height={800} alt='background'/>
          </figure>
          <div className='text-center flex items-center'>
            <h1 className='max-w-xl'>TITLE HEADER TEXT HERE</h1>
          </div>
        </div>
      </header>

      <section className='h-72 bg-medify-blue-100 padding-x py-12 '>
          <h4 className='flex justify-center'>Lowongan Pekerjaan</h4>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 mt-14'>
            <select defaultValue={'Jenis Pekerjaan'} className="select select-bordered w-full max-w-xs ">
              <option disabled value={'Jenis Pekerjaan'}>Jenis Pekerjaan</option>
              <option value={'On-site'}>On-site</option>
              <option value={'WFA'}>Work From Anywhere (WFA)</option>
              <option value={'Blended'}>Blended</option>
            </select>

            <select defaultValue={'Status Pekerjaan'} className="select select-bordered w-full max-w-xs">
              <option disabled value={'Status Pekerjaan'}>Status Pekerjaan</option>
              <option value={'Full-time'}>Full-time</option>
              <option value={'Part-time'}>Part Time</option>
              <option value={'Outsource'}>Outsource</option>
            </select>
          </div>
      </section>

      <section className='flex flex-col gap-8 my-20'>
        {LowonganJob.map((jobs, index) => (
          <div key={index} className='flex flex-col gap-8 padding-x'>
            <h5>{jobs.category}</h5>
            {jobs.job.map((job, index) => (
              <Lowongan key={index} jobTitle={job.pekerjaan} link={job.link}/>
            ))}
          </div>
        ))}
      </section>
      
      
    </main>
  )
}

export default page