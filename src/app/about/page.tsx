import Button from "@/components/Button";
import CardTestimoni from "@/components/CardTestimoni";
import Gridcard from "@/components/Gridcard";
import Pagetitle from "@/components/Pagetitle";
import Image from 'next/image'


export default function about() {
    return (
        <main>
            <Pagetitle
            page='Tentang Kami'/>

            <section className="hero">
            <div className="hero bg-medify-white py-8">
            <div className="hero-content text-center">
                <div className="">
                <h1 className="text-5xl font-bold">About Medify</h1>
                <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            </div>
            </section>

            <section className="px-24 items-center text-center">
                <h1 className="text-5xl font-bold pb-12">Perjalanan Medify </h1>
                
                <div className="flex flex-col-3 gap-12 lg:gap-24 px-12 lg:px-24">
                    <label className="swap swap-flip text-9xl">
                    
                        <input type="checkbox" />
                        
                        <div className="swap-on">
                        <div className=" card  bg-medify-blue-200 mb-20 shadow-md flex items-center">
                            <div className=" flex w-[150px] h-[200px] lg:w-[450px] lg:h-[600px] items-center justify-center text-center">
                            <img src="/icon/iconn.svg"></img>  
                            </div>
                            </div>
                        </div>


                        <div className="swap-off">
                        <div className="p-0 card-body bg-medify-white mb-20 shadow-md w-[150px] h-[200px] lg:w-[450px] lg:h-[600px] rounded-2xl">
                            <div className=" h-48 bg-medify-blue-100 rounded-t-2xl"/>
            
                            <div className="bg-medify-white flex flex-col gap-10 justify-center items-center py-10">
                                <h5 className=" text-medify-blue-500 text-center">Pendirian</h5>
                                <p className="body-1 px-8 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, eius hic totam minima, tempore pariatur aperiam repellat enim, </p>

                            </div>

                        </div>
                        </div>
                    </label> 

                     <label className="swap swap-flip text-9xl">
                    
                        <input type="checkbox" />
                        
                        <div className="swap-on">
                        <div className=" card  bg-medify-blue-200 mb-20 shadow-md flex items-center">
                            <div className=" flex w-[450px] h-[600px] items-center justify-center text-center">
                            <img src="/icon/iconn.svg"></img>  
                            </div>
                            </div>
                        </div>


                        <div className="swap-off">
                        <div className="card bg-medify-white mb-20 shadow-md flex items-center">
                            <div className="bg-medify-blue-200">
                            </div>

                            <div className="bg-medify-white">

                            </div>

                        </div>
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl">
                    
                        <input type="checkbox" />
                        
                        <div className="swap-on">
                        <div className=" card  bg-medify-blue-200 mb-20 shadow-md flex items-center">
                            <div className=" flex w-[450px] h-[600px] items-center justify-center text-center">
                            <img src="/icon/iconn.svg"></img>  
                            </div>
                            </div>
                        </div>


                        <div className="swap-off">
                        <div className="card bg-medify-white mb-20 shadow-md flex items-center">
                            <div className="bg-medify-blue-200">
                            </div>

                            <div className="bg-medify-white">

                            </div>

                        </div>
                        </div>
                    </label> 
                </div>
            
                
            </section>

            <section className="nilai">
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-32 screen bg-medify-blue-100'>
          <div className='flex flex-col gap-8'>
            <h2>Nilai-nilai <span className=' text-medify-blue-500'>Medify </span></h2>
            <p className='body-2 max-w-[15rem]'>Bersama kami untuk layanan lebih baik</p>
          </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <Gridcard src={'/icon/icon1.svg'} title={'Title'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '} id={undefined}/>
                <Gridcard src={'/icon/icon2.svg'} title={'Title'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '} id={undefined}/>
                <Gridcard src={'/icon/icon3.svg'} title={'Title'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '} id={undefined}/>
                <Gridcard src={'/icon/icon4.svg'} title={'Title'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '} id={undefined}/>
            </div>
            </div>
            </section>




            <div className="flex flex-col lg-flex-row lg:gap-12 max-w-screen items-center mt-20">
            <h2>Tim Inti <span className=' text-medify-blue-500'>Medify </span></h2>

            <div className="flex flex-col-3 lg-flex-row lg:gap-32 md:gap-12 max-w-screen items-stretch mt-0">

                <div className="card w-100 h-100 bg-medify-white mb-20">
                    <figure className="px-2 pt-2">
                        <img src="/tim/komisaris.svg" alt="card-picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dr. Adi Suriyanto SP.OT.</h2>
                        <p>Komisaris</p> 
                        <div className="card-actions">
                        <img src="/icon/linkedin.svg" alt="iconlinkedin"  />
                        </div>
                    </div>
                    </div>

                    <div className="card w-100 h-100 bg-medify-white mb-20">
                    <figure className="px-2 pt-2">
                        <img src="/tim/CEO.svg" alt="card-picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Kevin Fachreza</h2>
                        <p>CEO</p>
                        <div className="card-actions">
                        <img src="/icon/linkedin.svg" alt="iconlinkedin"  />
                        </div>
                    </div>
                    </div>

                    <div className="card w-100 h-100 bg-medify-white mb-20">
                    <figure className="px-2 pt-2">
                        <img src="/tim/CTO.svg" alt="card-picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Aldi Febriansyah</h2>
                        <p>CTO</p>
                        <div className="card-actions">
                        <img src="/icon/linkedin.svg" alt="iconlinkedin"  />
                        </div>
                    </div>
                </div>
                </div>
                </div>


                <div className='grid grid-cols-2 gap-16 px-32 py-16 bg-medify-white'>
              <div className='flex flex-col gap-3 justify-center'>
                  <h2 className='w-[70%]'>Kami adalah </h2>
                  < h2 className='text-medify-blue-500 mt-0'>Medify</h2>
                  <p className='body-2'>
                  Tim kami masih terus bertambah
                  </p>
              </div>
              <Image src="/tim/tim.png" width={1000} height={1000} alt='product'/>
          </div>
        
          <article className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 px-16 py-10 lg:px-32 lg:py-16  pb-10 bg-medify-blue-100' >
          <div className="card w-100 h-100 bg-medify-white shadow-xl mb-20 p-16">
                    <figure className="px-2 pt-2">
                        <img src="/tim/company.svg" alt="card-picture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Lihat Company Profile</p>
                        <div className="card-actions">
                        <Button buttonType="default">Download</Button>
                        </div>
                    </div>
                </div>
              <div className='flex flex-col gap-12'>
              <div className="card w-100 h-120 bg-medify-white shadow-xl mb-20 p-16">
                    <figure className="px-2 pt-2 w-75">
                        <img src="/tim/karier.svg" alt="card-picture" className="rounded-5xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>Lihat Company Profile</p>
                        <div className="card-actions">
                        <Button buttonType="default" className="hover:bg-medify-white hover:border-medify-blue-300" >Lihat Karier</Button>
                        </div>
                    </div>
                </div>
              </div>
          </article>

        </main>
    )
}