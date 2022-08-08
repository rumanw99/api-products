import React from 'react'

const Price = ({filterProduct}) => {

  return (
    <div className="border-bottom mb-4 pb-4">
    <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
    <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" defaultChecked={false}  id="price-all"
                onClick={() => filterProduct(0 , 500)}
            />
            <label className="custom-control-label" htmlFor="price-all">All Price</label>
            <span className="badge border font-weight-normal">1000</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" defaultChecked={false}  id="price-1" 
            onClick={() => filterProduct(0 , 100)}
            />
            <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
            <span className="badge border font-weight-normal">150</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" defaultChecked={false}  id="price-2" 
            onClick={() => filterProduct(100 , 200)}
            />
            <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
            <span className="badge border font-weight-normal">295</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" defaultChecked={false}  id="price-3"
            onClick={() => filterProduct(200 , 300)}
            />
            <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
            <span className="badge border font-weight-normal">246</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" defaultChecked={false}  id="price-4"
            onClick={() => filterProduct(300 , 400)}
            />
            <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
            <span className="badge border font-weight-normal">145</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input type="checkbox" className="custom-control-input"  defaultChecked={false}  id="price-5"
            onClick={() => filterProduct(400 , 500)}
            />
            <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
            <span className="badge border font-weight-normal">168</span>
        </div>
    </form>
</div>
  )
}

export default Price