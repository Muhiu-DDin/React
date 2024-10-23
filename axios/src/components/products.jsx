import { useEffect , useState } from "react"
import axios from "axios"
import { Card } from "./card";
import { Chips } from "./chips";

export function Products() {
    const [product , setProduct] = useState([]);
    const [category , setCategory] = useState([]);
    const [choosen , setChoosen] = useState("All");
    useEffect(
        ()=>{
            axios.get('https://dummyjson.com/products')
            .then( (res)=> {
                console.log(res?.data.products);
                setProduct(res?.data.products);
            } )
        } , [choosen]
    )
    useEffect(
        ()=>{
            axios.get('https://dummyjson.com/products/categories')
            .then( (res)=> {
                console.log(res?.data);
                setCategory(res?.data)
            } )
        } , []
    )
    
    const updated = product.filter(
        (obj)=>(
            choosen.toLowerCase() === obj.category.toLowerCase()
        )
    )
    
    const filtered = choosen === "All" ? product : updated ;

    return (
        <div className="container mx-auto px-5">

            <div className="mt-5 mb-5 flex flex-wrap gap-3 justify-center items-center">
               <Chips onClick={()=>setChoosen("All")} isChoosen={choosen === "All"} cate={
                {
                    name : "All" ,
                    slug : "All"
                }
                }/>
                {
                    category.map(
                        (obj)=>(
                            <Chips onClick={()=>setChoosen(obj.slug)} isChoosen={choosen === obj.slug} key={obj.slug} cate={obj}/>

                        )
                    )
                }
            </div>

            <div className="flex flex-wrap -m-4">
                {
                filtered.map(
                    (obj)=>(
                        <Card key={obj.id} obj = {obj}/>
                    )
                )
                }
            </div>
        </div>

    )
}