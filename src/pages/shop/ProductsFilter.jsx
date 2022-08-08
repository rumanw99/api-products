import React from 'react';
import {Link} from 'react-router-dom';


const ProductsFilter = ({detailProduct , products , loading , error}) => {
    
  return (
    <div style={{display : "flex" , flexWrap:"wrap" , padding:"50px"}}>
    {loading && <p>Loading...</p>}
        {products.map(product =>   
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={product.id}
        
        >
        <div className="card product-item border-0 mb-4" style={{height:"500px"}} >
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={product.image} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.category}</h6>
                <div className="d-flex justify-content-center">
                    <h6>{product.price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
            <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(0)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    </div>)
        }
        {products.length <= 0 && <h2>Products Not Found This Price</h2>}
        {error && <p>{error}</p>}
    </div>
  )
}

export default ProductsFilter