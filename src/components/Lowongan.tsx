import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {
    id: any,
    jobTitle : string,
    link: string

}
const Lowongan = ({id, jobTitle, link} : Props) => {
  return (
    
    <Link href={link}>
      <div className='flex justify-between w-full rounded-lg h-max py-4 px-6 bg-medify-blue-500 items-center'>
          <p className='body-2 text-medify-white'>{jobTitle}</p>
          <FontAwesomeIcon className='w-5 h-5 text-medify-white' icon={faChevronRight} />
      </div>
    </Link>
  )
}

export default Lowongan