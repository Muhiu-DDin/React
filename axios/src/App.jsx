import { useState } from 'react'
import {Header} from './components/header'
import { Products } from './components/products'
import { ProductDetail } from './components/productDetail'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/:id" element={<ProductDetail/>}/>
      </Routes>

    </BrowserRouter>
  )
}
export default App
