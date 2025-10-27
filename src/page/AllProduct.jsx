import React, { useEffect, useState } from 'react'
import CardProduct from '../component/CardProduct'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    let url = 'https://my-json-server.typicode.com/Jang-YuJin/react-eduRouter-prj/products';
    let response = await fetch(url);
    let data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='items-container'>
      <Container>
        <Row>
          <Col lg={1}>
            <div className='view-container'>
              <div className='grid-btn'><img className='grid-img' src='/img/grid.png'></img></div>
              <div className='list-btn'><img className='list-img' src='/img/list.png'></img></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
      {products.map((item) => (
        <Col lg={3}><CardProduct item={item}></CardProduct></Col>
      ))}
        </Row>
      </Container>
    </div>
  )
}

export default AllProduct
