import React from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../useFetch';
const ProductsFile = ({detailProduct , favorateProduct}) => {
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
                        <img className="img-fluid w-100" src={products[0].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[0].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[0].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(0)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(0)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[10].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[10].category}</h6>
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
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[2].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[2].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[2].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(2)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(2)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[4].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[4].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[4].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(4)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(4)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[5].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[5].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[5].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(5)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(5)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[6].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[6].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[6].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(6)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(6)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[7].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[7].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[7].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(7)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(7)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4" style={{height:"500px"}}>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={products[8].image} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{products[8].category}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>{products[8].price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/deta" className="btn btn-sm text-dark p-0" onClick={() => detailProduct(8)}><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button className="btn btn-sm text-dark p-0" onClick={() => favorateProduct(8)}><i className="fas fa-heart text-primary mr-1"></i>Add Favorate</button>
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

export default ProductsFile