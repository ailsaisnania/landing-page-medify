import React from 'react'
import Link from 'next/link'

type Props = {
    page: string
}

const Pagetitle = ({page}: Props) =>{
  return (
    <div className='flex flex-row gap-4 px-8 lg:px-7.5 my-12 items-center '>
        <Link href="/">
            <svg className="h-8 w-8 stroke-black"  
            viewBox="0 0 24 24"  
            fill="none"  
            strokeWidth="2"  
            strokeLinecap="round"  
            strokeLinejoin="round">  
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  
            <polyline points="9 22 9 12 15 12 15 22" /></svg>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth="2" stroke="currentColor" 
        className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M19.5 12h-15" />
        </svg>

        <p className='body-2'>{page}</p>

    </div>
  )
}

export default Pagetitle