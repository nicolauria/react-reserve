import React from 'react'
import axios from 'axios'
import ProductList from '../components/Index/ProductList'

function Home({ products }) {
  return <ProductList products={products} />;
}

// with nextjs we have the option to fetch data on the server
// this data will be merged with existing props
Home.getInitialProps = async () => {
  // both the frontend and the backend run on the same port (we avoid cors errors)
  const url = 'http://localhost:3000/api/products'
  const response = await axios.get(url)

  return {
    products: response.data
  }
}

export default Home;
