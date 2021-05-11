import { useState } from 'react'
import {getData} from '../utils/fetchData'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'

const Home = (props) => {
  const [products, setProducts] = useState(props.products)
  console.log(products)
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} /* handleCheck={handleCheck}  *//>
          ))
        }
      </div>
    </>
  )
}

export async function getServerSideProps({query}) {
  // const page = query.page || 1
  // const category = query.category || 'all'
  // const sort = query.sort || ''
  // const search = query.search || 'all'

  // const res = await getData(
  //   `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
  // )

  const res = await getData('product')
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}

export default Home