import React from 'react';
import { useFetch } from '../../useFetch';
import {Link} from 'react-router-dom';
const Products = ({detailProduct , favorateProduct}) => {
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    {loading && <p>Loading...</p>}
 {products.length > 0 &&        
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[14].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[14].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[14].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(14)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(14)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[15].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[15].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[15].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(15)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(15)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[16].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[16].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[16].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(16)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(16)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[3].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[3].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[3].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(3)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(3)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[17].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[17].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[17].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(17)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(17)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[18].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[18].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[18].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(18)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(18)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[19].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[19].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[19].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(19)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(19)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={products[1].image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{products[1].category}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>{products[1].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(1)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(1)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>}
{error && <p>{error}</p>}
    </>
  )
}

export default Products