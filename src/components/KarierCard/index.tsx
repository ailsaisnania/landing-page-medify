'use client'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import React, { useState } from 'react'

const jobsData = [
    {
        jobTitle: 'Product',
        color: 'blue',
        job:[
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            }
        ]
    },
    {
        jobTitle: 'Business',
        color: 'green',
        job:[
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            }
        ]
    },
    {
        jobTitle: 'Operational',
        color: 'orange',
        job:[
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            },
            {
                position: 'Job Position', 
                status: 'Status Pekerjaan',
                jenis: 'Jenis Pekerjaan',
                link: 'https://glints.com/id/companies/medify/d1f70395-7fc7-44ba-bc5c-60895dbba0b7' 
            }
        ]
    }
];



const KarierCard = () => {

    const blue_1 = 'bg-[#E8F3FF]'
    const blue_2 = 'bg-[#F5FAFF]'
    const green_1 = 'bg-[#D4FFE5]'
    const green_2 = 'bg-[#F1FFF7]'
    const orange_1 = 'bg-[#FFE9D4]'
    const orange_2 = 'bg-[#FFF6EE]'

  return (
    <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-16 lg:px-32 px-8 lg:py-20 py-8 text-medify-gray-500'>
        {jobsData.map((type, index) => (
            <div className='flex flex-col'>
                <div className={clsx(
                    'p-6 rounded-t-xl',
                    type.color === 'blue'
                    ? blue_1
                    : type.color === 'green'
                    ? green_1
                    : type.color === 'orange'
                    ? orange_1
                    : "",
                )}>
                    <h5>{type.jobTitle}</h5>
                </div>
                {type.job.map((job) => (
                <div key={index} className='flex flex-col'>
                    <div className={clsx(
                        'py-6 px-4 flex justify-between items-center',
                        type.color === 'blue'
                        ? blue_2
                        : type.color === 'green'
                        ? green_2
                        : type.color === 'orange'
                        ? orange_2
                        : "",
                    )}>
                        <div className='flex flex-col gap-4'>
                            <h6>{job.position}</h6>
                            <p className='body-2'>{job.status}</p>
                            <p className='body-2'>{job.jenis}</p>
                        </div>
                        <button onClick={()=> window.open(job.link, "_blank")} className='px-8'>
                            <FontAwesomeIcon icon={faChevronRight} size='xl'/>
                        </button>
                    </div>
                    <div className={clsx(
                        'h-2',
                        type.color === 'blue'
                        ? blue_1
                        : type.color === 'green'
                        ? green_1
                        : type.color === 'orange'
                        ? orange_1
                        : "",
                    )}/>
                </div>
                ))}
                <div className={clsx(
                    'h-5 rounded-b-xl',
                    type.color === 'blue'
                    ? blue_1
                    : type.color === 'green'
                    ? green_1
                    : type.color === 'orange'
                    ? orange_1
                    : "",
                )}/>
            </div>
        ))}
    </div>
  )
}

export default KarierCard