import React, { useState } from 'react';
import Footer from './pages/footer/Footer';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import Topbar from './pages/topbar/Topbar';
import Shop from './pages/shop/Shop';
import Details from './pages/details/Details';
import Cart from './pages/shopPages/cart/Cart';
import Checkout from './pages/shopPages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import { Routes, Route, useNavigate } from "react-router-dom";
import Deta from './pages/detailsId/Deta';
import Favorate from './pages/favorate/Favorate';
import { useFetch } from './useFetch';
import ProductsFilter from './pages/shop/ProductsFilter';

function App() {
  const [products , loading , error ,setProducts ] = useFetch('https://fakestoreapi.com/products')
  const [detail , setDetail] = useState([]);
  const [favorate , setFavorate] = useState([]);
  const [num , setNum] = useState(0)

  const detailProduct = (id) => {
      const de = <Deta id={id} />
      setDetail(de)
  }

  const favorateProduct = (id) => {
    setNum(num + 1)
    const fav = <Favorate id={id} detailProduct={detailProduct} />
    setFavorate([...favorate ,{num , ...fav}])
  }

  const navigate = useNavigate();
  const filterProduct = (n1 , n2) => {
        setTimeout(() => {
        setProducts(products.filter(product => product.price > n1 && product.price < n2))
       }, 2000) && navigate('/productsFilter') 

    
}


  return (
    
    <div className="App"> 
    
    <Topbar num={num} />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home detailProduct={detailProduct} favorateProduct={favorateProduct} />} />
        <Route path="shop" element={<Shop  detailProduct={detailProduct} filterProduct={filterProduct}  favorateProduct={favorateProduct} />} />
        <Route path="details" element={<Details detailProduct={detailProduct} favorateProduct={favorateProduct} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="deta" element={detail} />
        <Route path="favorate" element={favorate} />
        <Route path="productsFilter" element={<ProductsFilter detailProduct={detailProduct} products={products}  loading={loading}  error={error} />} />
      </Routes>
     
    <Footer />
</div>
    
  );
}

export default App;
