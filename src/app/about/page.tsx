'use client'
import Button from "@/components/Button";
import Gridcard from "@/components/Gridcard";
import Pagetitle from "@/components/Pagetitle";
import CardFlip from "@/components/CardFlip";
import { KelebihanMedify } from "@/constant";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function about() {
    return (
        <main>
            <Pagetitle
            page='Tentang Kami'/>

            <section className="hero px-16 py-10 lg:px-32 lg:py-16">
                <div className="hero bg-medify-white py-8">
                    <div className="hero-content flex-col gap-6 text-center">
                        <h2>About Medify</h2>
                        <p className="body-1 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>

            <section className="px-16 py-10 lg:px-32 lg:py-16 items-center text-center">
                <h2 className="mb-16">Perjalanan Medify </h2>
                
                <div className="flex flex-col-3 gap-12 lg:gap-24 px-12 lg:px-24 carousel">
                    <CardFlip/>
                    <CardFlip/>
                    <CardFlip/>
                </div>
            
                
            </section>

            <section className='flex flex-col lg:flex-row gap-10 lg:gap-32 screen bg-medify-blue-100'>
                <div className='flex flex-col gap-8'>
                <h2>Nilai-nilai <span className=' text-medify-blue-500'>Medify </span></h2>
                <p className='body-2 max-w-[15rem]'>Bersama kami untuk layanan lebih baik</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {KelebihanMedify.map((isi) => (
                    <Gridcard id={isi.id} src={isi.icon} title={isi.title} subtitle={isi.desc}/>
                ))}
                </div>
            </section>


            <section className="flex flex-col gap-16 items-center px-16 py-10 lg:px-32 lg:py-16">
                <h2>Tim Inti <span className=' text-medify-blue-500'>Medify </span></h2>

                <div className="lg:flex lg:flex-row gap-6 lg:gap-32 px-16 py-10 lg:px-32 lg:py-16 max-w-xs lg:max-w-none carousel">

                    <div className="carousel-item flex flex-col items-center justify-center gap-4 w-min bg-medify-white">
                        <figure className="p-2 w-44 h-44 lg:w-80 lg:h-80">
                            <Image src={'/tim/komisaris.svg'} width={500} height={500} alt="card-picture" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h6 className="flex items-center flex-warp">Dr. Adi Suriyanto SP.OT.</h6>
                            <p>Komisaris</p> 
                            <div className="card-actions">
                                <FontAwesomeIcon className='w-8 h-8 lg:w-12 lg:h-12 text-medify-blue-500' icon={faLinkedin} />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item flex flex-col items-center justify-center gap-4 w-min bg-medify-white">
                        <figure className="p-2 w-44 h-44 lg:w-80 lg:h-80">
                            <Image src={'/tim/CEO.svg'} width={500} height={500} alt="card-picture" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h6 className="flex items-center flex-warp">Kevin Fachreza</h6>
                            <p>CEO</p> 
                            <div className="card-actions">
                                <FontAwesomeIcon className='w-8 h-8 lg:w-12 lg:h-12 text-medify-blue-500' icon={faLinkedin} />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item flex flex-col items-center justify-center gap-4 w-min bg-medify-white">
                        <figure className="p-2 w-44 h-44 lg:w-80 lg:h-80">
                            <Image src={'/tim/CTO.svg'} width={500} height={500} alt="card-picture" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h6 className="flex items-center flex-warp">Aldi Febriansyah</h6>
                            <p>CTO</p> 
                            <div className="card-actions">
                                <FontAwesomeIcon className='w-8 h-8 lg:w-12 lg:h-12 text-medify-blue-500' icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-row gap-6 lg:gap-16 items-center px-16 pb-10 lg:px-32 lg:pb-16">
                <div className='flex flex-col gap-3 justify-center max-w-sm'>
                    <h2>Kami adalah <span className=" text-medify-blue-500">Medify</span></h2>
                    <p className='body-2'>
                    Tim kami masih terus bertambah
                    </p>
                </div>
                <Image src="/tim/tim.png" width={800} height={500} className="w-52 lg:w-[790px]" alt='timImage'/>
            </section>
          
        
          <article className='flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-16 px-16 py-10 lg:px-32 lg:py-16  bg-medify-blue-100' >
            <div className="card bg-medify-white shadow-xl p-8 lg:p-12">
                <figure>
                    <Image src="/tim/company.svg" alt="card-picture" width={500} height={500} className=" w-64 h-64 lg:w-80 lg:h-80 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center gap-6">
                    <p>Lihat Company Profile</p>
                    <div className="card-actions">
                        <Button buttonType="default">DOWNLOAD</Button>
                    </div>
                </div>
            </div>
            <div className="card bg-medify-white shadow-xl p-8 lg:p-12">
                <figure>
                    <Image src="/tim/karier.svg" alt="card-picture" width={500} height={500} className=" w-64 h-64 lg:w-80 lg:h-80 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center gap-6">
                    <p>Bergabung Dengan Kami</p>
                    <div className="card-actions">
                        <Button buttonType="default" onClick={() => window.location.href='/karier'}>LIHAT KARIER</Button>
                    </div>
                </div>
            </div>
          </article>

        </main>
    )
}