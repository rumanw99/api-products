import React from 'react'
import { useFetch } from '../../useFetch';
import {Link} from 'react-router-dom';

const Favorate = ({detailProduct , id}) => {
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
<>
          {loading && <p>Loading...</p>}
          { products.length > 0 && 
            
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1" >
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[id].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[id].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[id].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(15)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
       
            </div>
        }
            {error && <p>{error}</p>}
</>
  )
}

export default Favorate