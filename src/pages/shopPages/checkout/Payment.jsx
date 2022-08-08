import React from 'react'

const Payment = () => {
  return (
    <div className="card border-secondary mb-5">
    <div className="card-header bg-secondary border-0">
        <h4 className="font-weight-semi-bold m-0">Payment</h4>
    </div>
    <div className="card-body">
        <div className="form-group">
            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" defaultChecked={false} id="paypal"/>
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
            </div>
        </div>
        <div className="form-group">
            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" defaultChecked={false} id="directcheck"/>
                <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
            </div>
        </div>
        <div className="">
            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" defaultChecked={false} id="banktransfer"/>
                <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
            </div>
        </div>
    </div>
    <div className="card-footer border-secondary bg-transparent">
        <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">Place Order</button>
    </div>
</div>
  )
}

export default Payment