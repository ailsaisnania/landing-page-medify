'use client'
import Pagetitle from '@/components/Pagetitle'
import { InputTextForm, SesiDemo, TahuMedify } from '@/constant'
import React, {useState} from "react"; 
import Link from 'next/link';
import Button from '@/components/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';



function page() {
    const [startDate, setStartDate] = useState();

  return (
    <main>
        <Pagetitle
            page='Demo'/>
        
        <section className='lg:ml-24 px-8 lg:px-20 flex flex-col gap-5'>
            <h4>Formulir</h4>
            <hr className='w-28 h-1 bg-medify-blue-100 border-0 rounded'/>
            <h3 className=' text-medify-blue-500'>Permintaan Demo Aplikasi Medify</h3>
            <p className='body-2 max-w-4xl'>Kami akan menghubungi dan mengonfirmasi jadwal Demo Anda dalam kurun waktu 7 hari.
                Demo akan dilakukan secara online via Zoom dan tidak dipungut biaya.</p>

            <form className='flex flex-col gap-4'>
                {InputTextForm.map((form) => (
                    <div className='form-control gap-2' key={form.id}>
                        <label className='label button-text'>{form.title}</label>
                        <input type="text" placeholder={form.placeholder} name={form.key} className="rounded-xl input input-bordered input-sm lg:input-lg w-full max-w-xl " />
                    </div>
                ))}

                <hr className='w-full lg:w-[51%] my-4 h-[1.5px] bg-medify-gray-500'/>

                <div className='form-control gap-6'>
                    <label className='label button-text'>Jadwalkan Demo*</label>
                    <div className='max-w-xl'>
                        <div className=" h-16 flex justify-between items-center w-full input-bordered rounded-xl input px-12">
                            <span className="h-16 w-full flex items-center">
                            {" "}
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dayClassName={() => "example-datepicker-day-class"}
                                popperClassName="example-datepicker-class"
                                dateFormat="d/MM/yyyy"
                                placeholderText={'dd/mm/yyyy'}
                            />
                            </span>
                            <span className="icon">
                            <FontAwesomeIcon icon={faCalendar}/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='form-control gap-6 mt-2'>
                    <label className='label button-text'>Sesi Demo</label>
                    {SesiDemo.map((sesi) => (
                        <div className='flex flex-row items-center gap-4'>
                            <input type="checkbox" id={sesi.id} name={sesi.name} value={sesi.label} className='cb'/> 
                            <label htmlFor={sesi.id} className='body-2'>{sesi.label}</label>
                        </div>
                    ))}
                </div>

                <hr className='w-full lg:w-[51%] mt-4 h-[1.5px] bg-medify-gray-500'/>

                <div className='form-control gap-6'>
                    <label className='label button-text'>Dari mana Anda mengetahui Medify?</label>
                    {TahuMedify.map((tahu) => (
                        <div className='flex flex-row items-center gap-4'>
                            <input type="checkbox" id={tahu.id} name={tahu.name} value={tahu.label} className='cb'/> 
                            <label htmlFor={tahu.id} className='body-2'>{tahu.label}</label>
                        </div>
                    ))}
                </div>

                <hr className='w-full lg:w-[51%] my-4 h-[1.5px] bg-medify-gray-500'/>
                <div className='flex flex-row items-center gap-4'>
                    <input type="checkbox" id='persetujuan' name='persutujuan' value='Setuju' className='cb'/> 
                    <label htmlFor='persutujuan' className='body-2 lg:max-w-lg'>
                        Dengan ini, saya menyetujui 
                        <Link href='/' className='font-bold text-medify-blue-500 hover:underline'> Syarat & Ketentuan </Link> 
                        dan 
                        <Link href='/' className='font-bold text-medify-blue-500 hover:underline'> Kebijakan Privasi</Link>
                    </label>
                </div>
                
                <Link href='/'>
                    <Button className='btn btn-form w-full lg:w-[40rem] mt-12 mb-24' type='submit'>Daftar</Button>
                </Link>

            </form>
        </section>

    </main>
  )
}

export default page