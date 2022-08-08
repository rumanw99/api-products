import React, {  useState } from 'react';
import DescProducts from './DescProducts';
import DetailProduct from './DetailProduct';
import Header from './Header';
import ProductsLike from './ProductsLike';
import SlideProducts from './SlideProducts';

import { useFetch } from '../../useFetch';
const Details = ({detailProduct , favorateProduct}) => {
 
  const [ id , setId] = useState(1);
  const [products , loading , error] = useFetch(`https://fakestoreapi.com/products/${id}`)
  return (
    <>
        <Header />
        <div className="container-fluid py-5">
            <div className="row px-xl-5 mb-5">
                <SlideProducts products={products} id={id} setId={setId} loading={loading} error={error} />
                <DetailProduct products={products} id={id} setId={setId} loading={loading} error={error} />
            </div>
            <DescProducts />
            <ProductsLike detailProduct={detailProduct} favorateProduct={favorateProduct} />
        </div>
    </>
  )
}

export default Details