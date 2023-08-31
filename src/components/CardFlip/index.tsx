import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    <label className="swap swap-flip carousel-item">
                    
        <input type="checkbox" />

        <div className="swap-on">
            <div className="p-0 card-body bg-medify-white shadow-md w-[200px] h-[250px] lg:w-[300px] lg:h-[400px] rounded-2xl">
                <div className=" h-48 bg-medify-blue-100 rounded-t-2xl"/>
                <div className="bg-medify-white flex flex-col gap-4 justify-center items-center py-6">
                    <h5 className=" text-medify-blue-500 text-center">Pendirian</h5>
                    <p className=" text-xs lg:body-2 px-8 text-justify ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, eius hic totam minima, tempore pariatur aperiam repellat enim, </p>

                </div>
            </div>
        </div>

        <div className="swap-off">
            <div className=" card  bg-medify-blue-200 mb-20 shadow-md flex items-center">
                <div className=" flex w-[200px] h-[250px] lg:w-[300px] lg:h-[400px] items-center justify-center text-center">
                    <Image src={'/icon/expansi.svg'} width={500} height={500} className=' w-56 h-56' alt='icon'/>
                </div>
            </div>
        </div>

    </label> 
  )
}

export default index