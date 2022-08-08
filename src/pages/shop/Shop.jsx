import React from 'react'
import Header from './Header'
import Price from './Price'
import Color from './Color'
import Size from './Size'
import Search from './Search'
import Products from './Products'
import NextPrev from './NextPrev'

const Shop = ({detailProduct , filterProduct , favorateProduct}) => {

  return (
    <>
        <Header />
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-12">
              <Price filterProduct={filterProduct}  />
              <Color />
              <Size />
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                  <Search />
                  <Products detailProduct={detailProduct} favorateProduct={favorateProduct}  />
                  <NextPrev />
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Shop