import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMinus} from '@fortawesome/free-solid-svg-icons'

type Props = {
    page: string
}

const Pagetitle = ({page}: Props) =>{
  return (
    <section  className='flex flex-row gap-4 padding-x my-12 items-center '>
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

        <FontAwesomeIcon className='w-6 h-6' icon={faMinus} />

        <p className='body-2'>{page}</p>

    </section>
  )
}

export default Pagetitle