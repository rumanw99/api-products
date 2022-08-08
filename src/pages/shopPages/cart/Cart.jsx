import React from 'react'
import ApllyCoupon from './ApllyCoupon';
import CartSummary from './CartSummary';
import Header from './Header';
import ProductsTable from './ProductsTable';
const Cart = () => {
  return (
    <>
        <Header />
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <ProductsTable />
                <div className="col-lg-4">
                    <ApllyCoupon />
                    <CartSummary />
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart