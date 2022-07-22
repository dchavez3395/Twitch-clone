import React from 'react';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <div id='categories' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
            <span className='text-[#9147ff]'>Categories</span> we think you'll like
        </h2>
        {/*Container*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
            <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
            title='Just Chatting'
            viewers='500K viewers'
            tag1='IRL'
            />
             <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
            title='VALORANT'
            viewers='139K viewers'
            tag1='Shooter'
            tag2='FPS'
            />
             <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'
            title='League of Legends'
            viewers='156K viewers'
            tag1='MOBA'
            tag2='Action'
            />
             <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/518006_IGDB-188x250.jpg'
            title='Stray'
            viewers='100K viewers'
            tag1='Adventure Game'
           />
             <CategoriesItem 
            img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
            title='Apex Legends'
            viewers='90K'
            tag1='FPS'
            tag2='Shooter'
            />
        </div>
    </div>
  )
}

export default Categories