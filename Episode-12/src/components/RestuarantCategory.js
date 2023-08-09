import React, { useState } from 'react'
import ItemList from './ItemList';

const RestuarantCategory = ({data, showItems, setShowIndex}) => {
 const handleClick = () => {setShowIndex()}
  return (
    <div>
       <div className='w-8/12 mx-auto my-9 bg-gray-50 shadow-lg p-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>{showItems === false ?'⬇️': '⬆️'}</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
       </div>       
    </div>
  )
}

export default RestuarantCategory