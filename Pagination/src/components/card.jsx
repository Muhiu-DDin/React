import { Button } from "antd";
import { useContext } from 'react';
import {cartContext} from '../context/cartContext'


export function Card({item , isAdded}){
  const {title , price , images} = item
  const {cartItem  , addToCart  , removeItem } = useContext(cartContext);
    return(
        <div className="mt-20 lg:w-1/4 md:w-1/2 w-full h-auto">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={images[0] || images[1] ||  images[2]}
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {title}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              The Catalyzer
            </h2>
            <p className="mt-1">${price}</p>
          </div>
          <Button className="mt-2" onClick={()=>addToCart(item)}>{isAdded ?  "Add to cart" : "Added"}</Button>
        </div>
    )
}