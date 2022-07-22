import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
      <div className='stream w-80'>
      <Image src={img} className='w-max stream__thumbnail cursor-pointer hover:bg-[#9147ff]' />
      </div>
        <div className='flex pt-2'>
            <div className='pr-2'>
                <Image src={profile_img} width='60' height='60' className='rounded-full' alt='/' />
            </div>
            <div>
                <p className='text-sm font-bold hover:text-[#9147ff] cursor-pointer'>{title}</p>
                <p className='text-sm text-gray-500 hover:text-[#9147ff] cursor-pointer'>{user}</p>
                <p className='text-sm text-gray-500 hover:text-[#9147ff] cursor-pointer'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItem