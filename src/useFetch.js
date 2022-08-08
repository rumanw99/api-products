import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [products , setProducts] = useState([]);
const [loading , setLoading] = useState(null);
const [error , setError] = useState(null);

useEffect(() => {
  setLoading(true)
const fetch = async  () => {
      const response = await  axios.get(url)
      .catch(err => {
        setLoading(false)
        setError("net work is not")
      })
      setLoading(false)
      setProducts(response.data)
      setError("")
}
fetch();

},[url])


return [products , loading , error , setProducts]



}