import React from 'react'

const VideoSection = () => {
  const youtubeVideoUrl = 'https://www.youtube.com/embed/_j0qfzf7mas' // URL video YouTube yang diubah menjadi format embed

  return (
    <div
      id='Video-Section'
      className='flex flex-col items-center justify-center lg:w-screen w-full lg:h-screen h-full lg:py-0 py-16'
    >
      <h3 className='text-medify-gray-500 text-center lg:mb-16 mb-8'>
        <span className='text-medify-blue-500 '>Transformasi Digital </span>
        <span className='text-medify-gray-500 lg:mt-4 mt-2 block lg:inline'>
          Fasilitas Kesehatan
        </span>
      </h3>

      <div
        className='video-container lg:w-3/4 lg:h-1/2'
        style={{
          maxWidth: '682px',
          minWidth: '296px',
          maxHeight: '363px',
          minHeight: '171px'
        }}
      >
        <iframe
          src={youtubeVideoUrl}
          title='YouTube Video'
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
          className='rounded-xl'
        ></iframe>
      </div>
      <div className='w-3/4'>
        <p className='text-medify-gray-500 lg:text-center text-left lg:py-16 py-4'>
          Berdasarkan Permenkes No. 24 tahun 2022 (Pasal 45), seluruh fasilitas
          kesehatan diwajibkan menyelenggarakan Rekam Medis Digital paling
          lambat 31 Desember 2023.
        </p>
      </div>
    </div>
  )
}

export default VideoSection