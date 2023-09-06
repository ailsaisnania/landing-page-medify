import { ContentBlog } from '@/constant'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function index() {
  return (
    
        <div className="p-4 lg:p-10 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12 items-center">
            {ContentBlog.map((blog) => (
                <div>
                    <Link href={'/blogDetail'}>
                        <div className='flex flex-col gap-4'>
                            <Image src={blog.image} width={500} height={500} className='w-60 h-60 lg:w-80 lg:h-80 ' alt={blog.alt} />
                            <div className="px-0 text-center max-w-xs ">
                                <h5 className="mb-2 text-center">{blog.title}</h5>
                                <p className="text-medify-gray-500 text-left body-2">{blog.desc}</p>
                            </div>
                            <div className='flex flex-row items-center justify-start gap-2 lg:gap-4'>
                                <Image src={blog.profileImage} width={500} height={500} className='w-5 h-5 lg:w-10 lg:h-10 rounded-full' alt={blog.altProfile} />
                                <p className='text-xs lg:text-sm'>{blog.author}</p>
                                <p className='pb-4'>.</p>
                                <p className='text-xs lg:text-sm'>{blog.post}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    
  )
}

export default index