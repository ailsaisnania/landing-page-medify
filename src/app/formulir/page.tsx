'use client'
import Pagetitle from '@/components/Pagetitle'
import { InputForm } from '@/constant'
import React,{useState} from 'react'

function page() {
    const [date,setDate]=useState();

    console.log("Date", date);

  return (
    <section>
        <Pagetitle
            page='Demo'/>
        <div className='padding-x'>
            <div className='px-20 flex flex-col gap-5'>
                <h4>Formulir</h4>
                <hr className='w-28 h-1 bg-medify-blue-100 border-0 rounded'/>
                <h3 className=' text-medify-blue-500'>Permintaan Demo Aplikasi Medify</h3>
                <p className='body-2 max-w-4xl'>Kami akan menghubungi dan mengonfirmasi jadwal Demo Anda dalam kurun waktu 7 hari.
                    Demo akan dilakukan secara online via Zoom dan tidak dipungut biaya.</p>

                <form className='flex flex-col gap-4'>
                    {InputForm.map((form) => (
                        <div className='form-control gap-2'>
                            <label className='label button-text'>{form.title}</label>
                            <input type="text" placeholder={form.placeholder} name={form.name} className="rounded-xl input input-bordered input-sm lg:input-md w-full max-w-md " />
                        </div>
                    ))}

                    <hr className=' w-2/5 my-4 h-[1px] bg-black'/>
                    <div>
                        <input type='date' onChange={e=>setDate(e.target.value)} />
                    </div>

                </form>
            </div>
        </div>

    </section>
  )
}

export default page