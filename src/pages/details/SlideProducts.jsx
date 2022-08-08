import React from 'react';


const SlideProducts = ({products , loading , error , id , setId}) => {
    
  return (
    <>
    {loading && <p style={{width : "100%"}}>Loading...</p>}
    <div className="col-lg-5 pb-5" >
    <div id="product-carousel" className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner border">
            <div className="carousel-item active" style={{height : "500px"}}>
                <img className="w-100 h-100" src={products.image} alt=""/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
            {id <= 19 && <i className="fa fa-2x fa-angle-left text-danger" onClick={() => setId(id + 1)}></i>}
        </a>
        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
            {id >= 2 && <i className="fa fa-2x fa-angle-right text-danger" onClick={() => setId(id - 1)}></i>}
        </a>
    </div>
</div>
{error && <p>{error}</p>}
</>
  )
}

export default SlideProducts