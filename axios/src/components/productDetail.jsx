import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";

export function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }, [id]); 

    
    if (!product.images) {
        return <div>Loading...</div>;
    }

    
    return (
        <div className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product?.images[0]}
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                </h2>
                <p className="mt-1">${product.price}</p> 
            </div>
        </div>
    );
}

