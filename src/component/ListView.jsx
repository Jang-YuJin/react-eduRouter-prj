import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListView = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className='list-container'>
      <img src={item?.img} alt={item?.title} className='list-product-img cursor-pointer' onClick={showDetail}></img>
      <div className='list-desc-container'>
        <div className='title-container cursor-pointer' onClick={showDetail}>{item?.title}</div>
        <div className='price-container cursor-pointer' onClick={showDetail}>{item?.price.toLocaleString('ko-KR')} \</div>
        <div className='info-container'>
            {item?.new ? <img className='new-item' src={item?.new ? '/img/new-item.png' : ''} alt='new-item'></img> : ''}
            {item?.choice ? <img className='hot-item' src={item?.choice ? '/img/hot-item.png ' : ''} alt='hot-item'></img> : ''}
        </div>
        <div className='desc-container cursor-pointer' onClick={showDetail}>{item?.descript}</div>
      </div>
    </div>
  )
}

export default ListView
