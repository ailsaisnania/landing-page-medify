import Button from "@/components/Button";
import CardTestimoni from "@/components/CardTestimoni";
import Gridcard from "@/components/Gridcard";
import Pagetitle from "@/components/Pagetitle";
import Image from 'next/image'

export default function blog (){
    return(
        <main>
        <Pagetitle
            page='blog'/>


        <section className='flex flex-col w-full bg-medify-blue-100 py-0'>
            <article className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 px-16 py-10 lg:px-32 lg:py-16'>
                <Image src="/blog/pict1.svg" width={800} height={280} alt='product'/>
                <div className='flex flex-col gap-8'>
                    <h2 className=' w-[100%]'>Kenali Diabetes Mellitus, Penyebab Kematian Terbesar Nomor 3 </h2>
                    <p className='body-2 justify-between'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum....
                    </p>
                </div>
            </article>
        </section>



        <section className="py-20 px-28">
        <h3 className="px-12">Latest</h3>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/gambar1.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/pict2.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/pict3.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>
    </div>
        </section>

    <section className="py-0 px-28">
        <h3 className="px-12 py-10">Recommendation For You</h3>
        
<div id="default-carousel" className="relative w-full" data-carousel="slide">
   
    <div className="relative h-56 overflow-hidden px-12 rounded-lg md:h-96">
         
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/slider/slider1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/slider/slider2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/slider/slider3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/slider/slider4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/slider/slider1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

        
    </section>


    <section className="py-20 px-28">
        <h3 className="px-12">Latest</h3>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/gambar1.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/pict2.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>

    <div className="overflow-hidden items-center">
      <img className="w-full" src="/blog/pict3.svg" alt="article"/>
      <div className="px-0 py-4">
        <div className="font-bold text-xl mb-2 text-center">Lorem Ipsum Dolor sit Amet</div>
        <p className="text-medify-gray-500 text-base text-left body-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...        </p>
      </div>
    </div>
    </div>
        </section>


        </main>


    )
}