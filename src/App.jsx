import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)
  const product1 = { name: "Wireless Mouse", price: 25.99, status: "In Stock" }
  const product2 = { name: "Keyboard", price: 45.5, status: "Out of Stock" }
  const product3 = { name: "Monitor", price: 199.99, status: "In Stock" }

  return (
    <>
      <h1>Product List</h1>
      <div id="Product-List">
        <ProductCard name={product1.name} price={product1.price} status={product1.status} />
        <ProductCard name={product2.name} price={product2.price} status={product2.status} />
        <ProductCard name={product3.name} price={product3.price} status={product3.status} />
      </div>
      

    </>

  )
}

export default App
