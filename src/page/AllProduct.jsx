import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridView from '../component/GridView';
import ListView from '../component/ListView';
import { useSearchParams } from 'react-router-dom';

const AllProduct = ({ viewType, setViewType }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {
    let keyword = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/Jang-YuJin/react-eduRouter-prj/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='items-container'>
      <Container>
        <Row>
          <Col lg={1}>
            <div className='view-container'>
              <div className={`grid-btn ${viewType === 'Grid' ? 'select-view-btn' : ''}`} onClick={() => {setViewType('Grid')}}><img className='grid-img' src='/img/grid.png'></img></div>
              <div className={`list-btn ${viewType === 'List' ? 'select-view-btn' : ''}`} onClick={() => {setViewType('List')}}><img className='list-img' src='/img/list.png'></img></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        {viewType === 'Grid'
        ?
          <Row>
            {products.map((item) => (
              <Col lg={3}><GridView item={item}></GridView></Col>
            ))}
          </Row>
        :
          <div>
          {products.map((item) => (
            <Row>
              <Col lg={12}><ListView item={item}></ListView></Col>
            </Row>
          ))}
          </div>
        }
      </Container>
    </div>
  )
}

export default AllProduct
