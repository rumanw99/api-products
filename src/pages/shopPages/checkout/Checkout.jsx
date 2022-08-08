import React from 'react'
import BillingAddress from './BillingAddress'
import Header from './Header'
import OrderTotal from './OrderTotal'
import Payment from './Payment'

const Checkout = () => {
  return (
    <>
        <Header />
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <BillingAddress />
                <div className="col-lg-4">
                    <OrderTotal />
                    <Payment />
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout