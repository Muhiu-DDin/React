import { useNavigate } from "react-router-dom";

export function Card({obj}){
    const {images , title , price , category , id} = obj
    const navigate = useNavigate();

    const btnHandler = (id)=>{
        navigate(`/${id}`)
    }
    return(
        <div className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
            <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={images[0]}
            />
        </a>
        <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
                {title}
            </h2>
            <p className="mt-1">{price}</p>
        </div>
        <button onClick={()=>btnHandler(id)} className="px-2 py-2 bg-blue-600 text-white mt-2 rounded-md">view Details</button>
    </div>
    )
}