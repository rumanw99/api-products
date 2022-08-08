import React from 'react'

const DetailProduct = ({products , id , setId}) => {
  return (
    <div className="col-lg-7 pb-5" >
    <h3 className="font-weight-semi-bold">{products.title}</h3>
    <div className="d-flex mb-3">
        <div className="text-primary mr-2">
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star"></small>
            <small className="fas fa-star-half-alt"></small>
            <small className="far fa-star"></small>
        </div>
        <small className="pt-1">(50 Reviews)</small>
    </div>
    <h3 className="font-weight-semi-bold mb-4">{products.price}</h3>
    <p className="mb-4">{products.description}</p>
    <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
        <form>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="size-1" name="size"/>
                <label className="custom-control-label" htmlFor="size-1">XS</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="size-2" name="size"/>
                <label className="custom-control-label" htmlFor="size-2">S</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="size-3" name="size"/>
                <label className="custom-control-label" htmlFor="size-3">M</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="size-4" name="size"/>
                <label className="custom-control-label" htmlFor="size-4">L</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="size-5" name="size"/>
                <label className="custom-control-label" htmlFor="size-5">XL</label>
            </div>
        </form>
    </div>
    <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="color-1" name="color"/>
                <label className="custom-control-label" htmlFor="color-1">Black</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="color-2" name="color"/>
                <label className="custom-control-label" htmlFor="color-2">White</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="color-3" name="color"/>
                <label className="custom-control-label" htmlFor="color-3">Red</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="color-4" name="color"/>
                <label className="custom-control-label" htmlFor="color-4">Blue</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" defaultChecked={false} id="color-5" name="color"/>
                <label className="custom-control-label" htmlFor="color-5">Green</label>
            </div>
        </form>
    </div>
    <div className="d-flex align-items-center mb-4 pt-2">
        <div className="input-group quantity mr-3" style={{width: "300px"}}>
            <div className="input-group-btn">
            {id >= 2 && <button className="btn btn-primary btn-minus" >
                 <i className="fa fa-minus" onClick={() => setId(id - 1)}></i>
                </button>}
            </div>
            <input type="number" min="1" max="20" className="form-control bg-secondary text-center" 
            value={id}
            defaultChecked={false}
             />
            <div className="input-group-btn">
            {id <= 19  && <button className="btn btn-primary btn-plus">
                     <i className="fa fa-plus" onClick={() => setId(id + 1)}></i>
                </button>}
            </div>
        </div>
        <button className="btn btn-primary px-3 mr-5"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
    </div>
    <div className="d-flex pt-2">
        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
        <div className="d-inline-flex">
            <button className="text-dark px-2" >
                <i className="fab fa-facebook-f"></i>
            </button>
            <button className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
            </button>
            <button className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="text-dark px-2" href="">
                <i className="fab fa-pinterest"></i>
            </button>
        </div>
    </div>
</div>
  )
}

export default DetailProduct