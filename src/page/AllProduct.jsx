import React, { useEffect, useState } from 'react'
import CardProduct from '../component/CardProduct'

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    let response = await fetch('https://my-json-server.typicode.com/Jang-YuJin/react-eduRouter-prj/products');
    let data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <CardProduct item={item}></CardProduct>
      ))}
    </div>
  )
}

export default AllProduct
