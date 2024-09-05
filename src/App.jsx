
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import ProductCrud from './components/ProductCrud';




function App() {
const [products, setProducts] = useState([]);
const [filterValue, setFilterValue] = useState('All');



useEffect(()=>{
  const url = "https://job-task-server-2-self.vercel.app/api/products";
  fetch(url)
  .then(res=> res.json())
  .then(data=>setProducts(data))
},[])


// filter product
const filterData = products.filter(p =>filterValue === 'All'? products : p.category === filterValue)

  return (
    <>
     <div>
      <h1 className='text-2xl font-bold text-red-400 text-center my-6'>All Products :{filterData.length}</h1>
      <div className=' flex justify-center'>
      <select
         onChange={(e)=>setFilterValue(e.target.value)}
          className="border p-4 rounded-md text-center" >
         
          <option value="All">All</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="HomeGoods">HomeGoods</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Clothing">Clothing</option>
          <option value="Beauty">Beauty</option>
          <option value="Toys">Toys</option>
          <option value="Books">Books</option>
        </select>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:px-24">
        {
          filterData.map((singleProduct,idx)=>{
            return(
              <ProductCrud key={idx} singleProduct={singleProduct}/>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

export default App
