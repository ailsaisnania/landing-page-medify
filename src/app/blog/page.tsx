
import Pagetitle from "@/components/Pagetitle"
import Image from 'next/image'
import SliderBlog from '@/components/SliderBlog'
import CardBlog from '@/components/CardBlog'

export default function blog (){
    return(
        <main>
            <Pagetitle page='Blog'/>

            <article className='flex flex-col lg:grid lg:grid-cols-2 bg-medify-blue-100 h-auto padding-x py-8 lg:py-16 gap-8 lg:gap-16'>
                <div className="w-full flex items-center">
                    <Image src="/blog/pict1.svg" width={1000} height={1000} className=' object-cover' alt='product'/>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <Image src={'/tim/CTO.svg'} width={500} height={500} className='w-10 h-10 rounded-full' alt={'profile'}/>
                        <p className='body-2'>Author</p>
                        <p className='pb-4'>.</p>
                        <p className='body-2'>15 Minutes Ago</p>
                    </div>
                    <h3 className=' w-full'>Kenali Diabetes Mellitus, Penyebab Kematian Terbesar Nomor 3 </h3>
                    <p className='body-2 justify-between'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum....
                    </p>
                </div>
            </article>

            <section className="h-auto padding-x py-8 lg:py-16 flex flex-col gap-8 lg:gap-16">
                <h3>Latest</h3>
                <div>
                    <CardBlog/>
                </div>
            </section>

            <section className="padding-x">
                <h3 className="mb-8">Recommendation For You</h3>
                <SliderBlog/>
            </section>

            <section className="h-auto padding-x py-8 lg:py-16 flex flex-col gap-8 lg:gap-16">
                <div>
                    <CardBlog/>
                </div>
            </section>

        </main>
    )
}