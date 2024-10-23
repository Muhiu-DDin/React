import {
    useQuery,
    useMutation,
} from 'react-query'

import { fetching } from './fetchData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Recipe(){
    const navigate = useNavigate();
    const handleBtn = (id)=> {
        navigate(`/${id}`)
    }

    const [search , setSearch] = useState(null);
     const {data , isLoading , isError}= useQuery(
        {
            queryKey : ["Recipe" , search],
            queryFn : ()=>fetching(search),
            keepPreviousData : true
        }
     );

      if (isError) {
        return <div>Error fetching data!</div>;
      }

return(
    <div className='px-5'>
    <h1 className='text-center mt-6 font-semibold text-3xl'>Enjoy Your Meal</h1>
    <input className="outline-none mt-8 w-full px-5 py-2 border-2 rounded-md border-blue-800" value={search} type="text" placeholder='search your food' onChange={(e)=>setSearch(e.target.value)}/>
    {

    isLoading ? (<div>Loading...</div>) : (
          
    <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap  -m-2">
        {
            data && data.recipes.map(
                (item)=>{
                    const {image , id , name , rating } = item;
                    return(
                    <div key={id} className="mb-5 rounded-md lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="cursor-pointer block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                       {name}
                      </h3>
                      <h2 className="inline-block text-gray-900 title-font text-lg font-medium">
                        Rating:
                      </h2>
                      <p className="inline mt-1 ml-2">{rating}</p>
                    </div>
                    <button onClick={()=>handleBtn(id)} className='bg-blue-600 border rounded-md mt-5 text-white px-3 py-2'>Order</button>
                    </div>
                    )
                }
            )
        }
  </div>
</div>
)
} 
</div>

)
}