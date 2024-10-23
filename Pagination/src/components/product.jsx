import { useEffect, useState } from 'react'
import { Card } from './card'
import { Pagination } from 'antd';
import { Badge } from "antd";
import { useContext } from 'react';
import {cartContext} from '../context/cartContext'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom";

export function Product(){
    const [product , setProduct] = useState([]);
    const [limit , setLimit] = useState(40);
    const [total , setTotal] = useState(0);
    const [skip , setSkip] = useState(0);
  
    const {cartItem  , addToCart  , setCartItem ,removeItem } = useContext(cartContext);

    useEffect(
      ()=>{
        const saveItem = JSON.parse(localStorage.getItem("myCartItems"));
        if(saveItem){
             setCartItem([...saveItem]);
        }
      } , []
    )
    useEffect(
      ()=>{
        localStorage.setItem("myCartItems", JSON.stringify(cartItem));
      } , [cartItem]
    )
  
    useEffect(
      ()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((res)=>res.json())
        .then((res)=>{
          setProduct((prev)=>[...prev , ...res.products])
          setTotal(res.total)
          console.log(res.products)
          console.log(res)
        })
        console.log("length=>" , product.length)
      } , [limit , skip]
    )

//     function handScrolling(){

//       const yScroll = window.scrollY
//       const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//       console.log(yScroll)
//       console.log(scrollable)

//       if (yScroll >= scrollable -1) {
//         // alert("End of page");
//          setSkip((prevSkip) => prevSkip + limit);
         // setLimit((prevLimit) => prevLimit + 20);

//       }
// }
// useEffect(
//   ()=>{
//     document.addEventListener("scroll" , handScrolling);
//   }, []
// )

    return(
        <div className="px-5 flex flex-col justify-center items-center mb-5">
        <div className=' px-5 flex justify-between items-center w-full '>
            <div>
            <h1 className='font-bold mt-5 text-2xl text-center'>Pagination</h1>
            </div>

            <div className='mt-5'>
            <Link to="/mycart">
            <Badge count={cartItem.length}>
            <ShoppingCartOutlined className='text-3xl ' />
            </Badge>
            </Link>
            </div>
        </div>
        <div className="flex flex-wrap mt-5 px-5">
        {
          product.map(
            (obj , index)=>{
              const isAdded = cartItem.findIndex((item)=>obj.id ===item.id) === -1;
              return(
                <Card key={index} item={obj} isAdded={isAdded}/>
              )
            }
          )
        }
        </div>
        <Pagination onChange={(num)=>setSkip((prev)=>prev + limit)} defaultCurrent={1} total={total} />
      </div>
    )
}