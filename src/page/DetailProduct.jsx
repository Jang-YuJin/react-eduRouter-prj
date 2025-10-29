import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DetailProduct = () => {
  let {id} = useParams();
  const [product, setProduct] = useState();

  const getProduct = async() => {
    let url = `https://my-json-server.typicode.com/Jang-YuJin/react-eduRouter-prj/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container className='justify-content-md-center mg-top40'>
      <Row>
        <Col lg={6}>
          <img src={product?.img} alt={product?.title} className='detail-img'></img>
        </Col>
        <Col lg={6}>
          <div className="d-grid gap-2">
          <Button variant="outline-primary" size="lg" className='mobile-mg-top20px'>수강하기</Button>
          </div>
          <div className='mg-top10 detail-title'>{product?.title}</div>
          <div className='mg-top10 detail-price'>{product?.price.toLocaleString('ko-KR')} \</div>
          <div className='mg-top10'>
            <span>교재 제공 방법: </span>
            <select className='detail-textbook'>
              {product?.textbook.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className='mg-top10'>
            {product?.new ? <img className='new-item' src={product?.new ? '/img/new-item.png' : ''} alt='new-item'></img> : ''}
            {product?.choice ? <img className='hot-item' src={product?.choice ? '/img/hot-item.png ' : ''} alt='hot-item'></img> : ''}
          </div>
          <div className='mg-top10 detail-desc'>{product?.descript}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailProduct
