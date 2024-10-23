import {
    useQuery,
    useMutation,
} from 'react-query'
import { useParams } from 'react-router-dom';

async function fetching(id){
    const fetched = await fetch(`https://dummyjson.com/recipes/${id}`)
    const res = await fetched.json();
    console.log(res)
    return res;    
}

export function RecipeDetails(){
    const {id} = useParams();
    const {data , isLoading , isError}= useQuery(
        {
            queryKey : ["Recipe" , id],
            queryFn : ()=>fetching(id)
        }
     );

     if (isError) {
        return <div>Error fetching data!</div>;
      }
      if (isLoading) {
        return <div>Loading...</div>;
      }

    return(
        <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap  -m-4">
            <div className="mb-5 rounded-md lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="cursor-pointer block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={data.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                       {data.name}
                      </h3>
                      <h2 className="inline-block text-gray-900 title-font text-lg font-medium">
                        Rating:
                      </h2>
                      <p className="inline mt-1 ml-2">{data.rating}</p>
                    </div>
                    </div>
            </div>
        </div>
    )
}