import React from 'react'
import axios from 'axios'

function Home() {
  // used any time we want to perform a side effect (functional programming)
  React.useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    // both the frontend and the backend run on the same port (we avoid cors errors)
    const url = 'http://localhost:3000/api/products'
    const response = await axios.get(url)
    console.log(response.data)
  }

  return <>home</>;
}

export default Home;
