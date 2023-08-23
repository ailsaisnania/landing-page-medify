import React from 'react'
import Image from 'next/image'

type Props = {
  id : any,
  src: string,
  title: string,
  subtitle: string
}

export const Gridcard = ({id, src, title, subtitle} : Props) => {
  return (
    <section className='flex flex-col gap-2'>
      <figure className='flex justify-center lg:justify-start'>
        <Image src={src} width={60} height={60} alt="icon"/>
      </figure>
      <h5>{title}</h5>
      <p className=' body-2'>{subtitle}</p>
    </section>
  )
}

export default Gridcard