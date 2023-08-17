import React from 'react'
import Image from 'next/image'

type Props = {
  src: string,
  title: string,
  subtitle: string
}

export const Gridcard = ({src, title, subtitle} : Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-center lg:justify-start'>
        <Image src={src} width={60} height={60} alt="icon"/>
      </div>
      <h5>{title}</h5>
      <p className=' body-2'>{subtitle}</p>
    </div>
  )
}

export default Gridcard