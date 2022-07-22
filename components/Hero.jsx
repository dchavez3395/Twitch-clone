import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='p-2 md:p-8'>
        <div className='relative overflow-hidden w-full pt-[40%]'>
        <iframe className='w-full h-full absolute top-0 left-0 right-0 bottom-0'  src="https://www.youtube.com/embed/Q2eTUhXyXQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    </div>
  )
}

export default Hero