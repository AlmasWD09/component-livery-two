
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import ProductCrud from './components/ProductCrud';




function App() {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  console.log(sortValue);


  useEffect(() => {
    const url = "https://job-task-server-2-self.vercel.app/api/products";
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  // filter product
  const filterData = products.filter(p => filterValue === 'All' ? products : p.category === filterValue)

  // search product
  const searchData = products.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()) || p.category.toLowerCase().includes(searchValue.toLowerCase()) || p.brand.toLowerCase().includes(searchValue.toLowerCase())) // সার্চ ভ্যালু lowercase করে ফিল্টার করা হচ্ছে 




  // conditionaly data show in display
  let productData = searchValue ? searchData : filterValue !== 'All' ? filterData : products;

// sort by product
if(sortValue === 'dse'){
productData = productData.sort((a,b) => b.price - a.price) // High to Low
}
else if(sortValue === 'asc'){
productData = productData.sort((a,b) => a.price - b.price) // Low to High
}


  // let productData = filterData;  // only filter data <--------
  // let productData = searchData;  // only search data <--------

  return (
    <>
      <div className=''>
        <h1 className='text-2xl font-bold text-sky-400 text-center my-6'>All Products :{productData.length}</h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          {/* filter data here..... */}
          <div className=' flex justify-center'>
            <select
              onChange={(e) => setFilterValue(e.target.value)}
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

          {/* search data here... */}
          <div className='flex justify-center'>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className='border p-4 rounded-md ' type="text" placeholder='Search...' />
          </div>

          {/* sort by price data here.... */}
          <div className='flex justify-center'>
            <select
              onChange={(e) => setSortValue(e.target.value)}
              className='border p-4 rounded-md'>
              <option disabled value=''>Sort By Price</option>
              <option value='dsc'>High to Low</option>
              <option value='asc'>Low to High</option>
            </select>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:px-24">
          {
            productData.map((singleProduct, idx) => {
              return (
                <ProductCrud key={idx} singleProduct={singleProduct} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
