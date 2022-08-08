import React from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../useFetch';

const ProductsLike = ({detailProduct , favorateProduct}) => {
 
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    <div className="container-fluid py-5">
    <div className="text-center mb-4">
    <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
    </div>
   
    {loading && <p>Loading...</p>}
           {products.length > 0 &&  <div className="" style={{
            display:"flex" , justifyContent : "space-between", flexWrap:"wrap" , alignItems:"center"
           }}>
           <div className="card product-item border-0" style={{width:"300px" , height:"500px"}} >
               <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                   <img className="img-fluid w-100" src={products[7].image} alt=""/>
               </div>
               <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                   <h6 className="text-truncate mb-3">{products[7].title}</h6>
                   <div className="d-flex justify-content-center">
                       <h6>{products[7].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                   </div>
               </div>
               <div className="card-footer d-flex justify-content-between bg-light border">
                   <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(8)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                   <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(8)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                   <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
               </div>
           </div>
           <div className="card product-item border-0" style={{width:"300px" , height:"500px"}} >
               <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                   <img className="img-fluid w-100" src={products[6].image} alt=""/>
               </div>
               <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                   <h6 className="text-truncate mb-3">{products[6].title}</h6>
                   <div className="d-flex justify-content-center">
                       <h6>{products[8].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                   </div>
               </div>
               <div className="card-footer d-flex justify-content-between bg-light border">
               <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(6)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
               <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(6)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                   <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
               </div>
           </div>
           <div className="card product-item border-0" style={{width:"300px" , height:"500px"}}>
               <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                   <img className="img-fluid w-100" src={products[9].image} alt=""/>
               </div>
               <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                   <h6 className="text-truncate mb-3">{products[9].title}</h6>
                   <div className="d-flex justify-content-center">
                       <h6>{products[9].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                   </div>
               </div>
               <div className="card-footer d-flex justify-content-between bg-light border">
               <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(9)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
               <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(9)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                   <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
               </div>
           </div>
           <div className="card product-item border-0" style={{width:"300px" , height:"500px"}}>
               <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                   <img className="img-fluid w-100" src={products[10].image} alt=""/>
               </div>
               <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                   <h6 className="text-truncate mb-3">{products[10].title}</h6>
                   <div className="d-flex justify-content-center">
                       <h6>{products[10].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                   </div>
               </div>
               <div className="card-footer d-flex justify-content-between bg-light border">
               <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(10)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
               <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(10)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                   <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
               </div>
           </div>
           
       </div>}
     
</div>
{error && <p>{error}</p>}
</>
  )
}

export default ProductsLike