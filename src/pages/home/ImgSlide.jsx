import React  from 'react';
import { useFetch } from '../../useFetch';


const ImgSlide = () => {
   const [products , loading , error] = useFetch('https://fakestoreapi.com/products')
  return (
    <>
    {loading && <p>Loading...</p>}
    {products.length > 0 && 
    
        <div id="header-carousel" className="carousel slide" data-ride="carousel"
        
        >
  
        <div className="carousel-inner">
        
            <div className="carousel-item active" style={{height: "410px"}}>
                <img className="img-fluid" src={products[0].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[0].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[0].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={{height: "410px"}}>
                <img className="img-fluid" src={products[1].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[1].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[1].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={{height: "410px"}}>
                <img className="img-fluid" src={products[2].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[2].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[2].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={{height: "410px"}}>
                <img className="img-fluid" src={products[3].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[3].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[3].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={{height: "410px"}}>
                <img className="img-fluid" src={products[4].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[4].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[4].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item" style={{height: "410px"}}>
                <img className="img-fluid" src={products[5].image} alt="" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{maxWidth: "700px"}}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">{products[5].category}</h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">{products[5].title}</h3>
                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                </div>
            </div>
      
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
           <div className="btn btn-dark" style={{width: "45px" , height: "45px"}}>
           <span className="carousel-control-prev-icon mb-n2"></span>
       </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
           <div className="btn btn-dark" style={{width: "45px" ,  height: "45px"}}>
            <span className="carousel-control-next-icon mb-n2"></span>
        </div>
        </a>
      </div>
    }
    {error && <p>{error}</p>}
    </>
  )
}

export default ImgSlide