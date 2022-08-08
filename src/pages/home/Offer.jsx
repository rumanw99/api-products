import React from 'react';
import { useFetch } from '../../useFetch';

const Offer = () => {
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    {loading && <p>Loading...</p>}
        {products.length > 0 &&    <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src={products[12].image} alt="" />
                    <div className="position-relative" style={{zIndex: "1"}}>
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">{products[12].category}</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src={products[13].image} alt="" />
                    <div className="position-relative" style={{zIndex: "1"}}>
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">{products[13].category}</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    {error && <p>{error}</p>}
    </>
  )
}

export default Offer