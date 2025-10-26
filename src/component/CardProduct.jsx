import React from 'react'

const CardProduct = ({ item }) => {
  return (
    <div className='card-container'>
      <div><img src={item?.img} alt={item?.title} className='card-img'></img></div>
      <div className='hot-container'>{item?.choice}</div>
      <div className='title-container'>{item?.title}</div>
      <div className='new-container'>{iten?.new}</div>
    </div>
  )
}

export default CardProduct
