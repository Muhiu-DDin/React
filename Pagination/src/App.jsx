import {BrowserRouter , Routes , Route} from "react-router-dom"
import { Product } from "./components/product"
import { MyCart } from "./components/myCart"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
