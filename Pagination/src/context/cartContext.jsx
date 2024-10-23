import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    const [cartItem , setCartItem] = useState([]);

    function addToCart(item){
        setCartItem(
            (prev)=>{
                const index = cartItem.findIndex((obj)=>obj.id === item.id);
                if(index === -1){
                    return [...prev , {...item , quantity : 1}]
                }
                else{
                    return prev.map((obj , ind)=>(
                        index === ind ? {...obj , quantity : obj.quantity+1} : obj
                    ))
                }
            }
        )
    }
    function lessquantity(item){
        setCartItem(
            (prev)=>{
                const index = cartItem.findIndex((obj)=>obj.id === item.id);
                    return prev.map((obj , ind)=>(
                        index === ind ? {...obj , quantity : obj.quantity-1} : obj
                    ))
            }
        )
    }

    function removeItem(id){
        setCartItem(
            cartItem.filter(
                (obj)=>obj.id !== id
            )
        )
    }

    return(
    <cartContext.Provider value={{cartItem ,setCartItem , addToCart , removeItem , lessquantity}}>
        {children}
    </cartContext.Provider>
    )
}
