import React from 'react'

const CardProduct = ({ item }) => {
  return (
    <div className='card-container'>
      <div><img src={item?.img} alt={item?.title} className='card-img'></img></div>
      <div className='title-container'>{item?.title}</div>
      <div className='price-container'>{item?.price.toLocaleString('ko-KR')} \</div>
      <div className='info-container'>
        {item?.new ? <img className='new-item' src={item?.new ? '/img/new-item.png' : ''} alt='new-item'></img> : ''}
        {item?.choice ? <img className='hot-item' src={item?.choice ? '/img/hot-item.png ' : ''} alt='hot-item'></img> : ''}
      </div>
    </div>
  )
}

export default CardProduct
