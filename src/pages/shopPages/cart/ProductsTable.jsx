import React from 'react'
import { useFetch } from '../../../useFetch'

const ProductsTable = () => {
    const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    {loading && <p>Loading...</p>}
  { products.length > 0 &&  <div className="col-lg-8 table-responsive mb-5">
    <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
            <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody className="align-middle">
            <tr>
                <td className="align-middle"><img src={products[1].image} alt="" style={{width: "50px"}}/> {products[1].category}</td>
                <td className="align-middle">{products[1].price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={products[1].id}/>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="align-middle"><img src={products[2].image} alt="" style={{width: "50px"}}/>{products[2].category}</td>
                <td className="align-middle">{products[2].price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={products[2].id}/>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="align-middle"><img src={products[3].image} alt="" style={{width: "50px"}}/> {products[3].category}</td>
                <td className="align-middle">{products[3].price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={products[3].id}/>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="align-middle"><img src={products[4].image} alt="" style={{width: "50px"}}/> {products[4].category}</td>
                <td className="align-middle">{products[4].price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={products[4].id}/>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
            <tr>
                <td className="align-middle"><img src={products[5].image} alt="" style={{width: "50px"}}/> {products[5].category}</td>
                <td className="align-middle">{products[5].price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={products[5].id}/>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
            </tr>
        </tbody>
    </table>
</div>}
{error && <p>{error}</p>}
</>
  )
}

export default ProductsTable