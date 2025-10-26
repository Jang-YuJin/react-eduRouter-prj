import React, { useEffect, useState } from 'react'
import CardProduct from '../component/CardProduct'

const AllProduct = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async() => {
    let response = await fetch('http://localhost:5000/products');
    let data = await response.json();
console.log(data);
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
