import React from 'react';
import './deta.css'
import { useFetch } from '../../useFetch';

const Deta = ({id}) => {
    
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <div className='detailsId'>

    {loading && <p>Loading...</p>}
      {products.length > 0 && <>
         <div className="detailsId_left">
             <img src={products[id].image} alt="" />
         </div>
         <div className="detailsId_right">
             <p className="details_category"><h2>Category :</h2> {products[id].category}</p>
             <h2 className="details_title"><h2>Title :</h2>  {products[id].title}</h2>
             <h3 className="details_price"><h2>Price :</h2> {products[id].price}</h3>
             <h4 className="details_rating"><h2>Count :</h2> {products[id].rating.count}</h4>
             <h4 className="details_rating"><h2>Rate :</h2> {products[id].rating.rate}</h4>
             <h5 className="details_description"><h2>Description : </h2>{products[id].description}</h5>
         </div>
       </>}
        {error && <p>{error}</p>}
    </div>
  )
}

export default Deta