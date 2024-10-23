import { useContext } from 'react';
import {cartContext} from '../context/cartContext'
import { Button } from "antd";
import {PlusOutlined , MinusOutlined} from '@ant-design/icons'

export function MyCart(){
    const {cartItem  , addToCart  , removeItem , lessquantity } = useContext(cartContext);

    const totalQuantity = cartItem.reduce(
      (acc , curr)=>  acc + curr.quantity, 0
    )
    const totalAmount = cartItem.reduce(
      (acc , curr)=>  acc + curr.quantity * curr.price, 0
    )

    return(
        <div className='mx-5'>
        <h1 className='text-3xl text-center mb-5 mt-5'>Cart Items</h1>
        <div className='w-full flex justify-center items-center'>
          <div className='border border-gray-300 h-[50px] px-5 flex gap-2 items-center w-1/2'>
              <h1>Quantity:</h1>
              <h1>{totalQuantity}</h1>

          </div>
          <div className='border border-gray-300 h-[50px] px-5 flex gap-2 items-center w-1/2'>
              <h1>Total Amount:</h1>
              <h1>{totalAmount}</h1>
          </div>
        </div>
        {
            cartItem.map(
                (obj)=>(
                    <div key={obj.id} className="px-5 mt-4 border border-gray-300 flex w-full h-auto">
                    <a className="px-5 block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={obj.images[0] || obj.images[1] ||  obj.images[2]}
                      />
                    </a>
                    <div className="flex flex-col mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                      {obj.title}
                      </h2>
                      <p className="mt-1">{obj.price}</p>
                    <div className='flex gap-2 mt-5'>
                        <Button onClick={()=>addToCart(obj)}><PlusOutlined /></Button>
                        {obj.quantity}
                        <Button disabled={obj.quantity <= 1} onClick={()=>lessquantity(obj)}><MinusOutlined /></Button>
                    </div>
                    <div>
                    <Button onClick={()=>removeItem(obj.id)} className='mt-5'>Delete</Button>
                    </div>
                    </div>
                  </div>
                )
            )
        }
        </div>
    )
}
