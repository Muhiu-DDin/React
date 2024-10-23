export async function fetching(search){
    const url = search? `https://dummyjson.com/recipes/search?q=${search}`: "https://dummyjson.com/recipes" ;
    const fetched = await fetch(url);
    const res = await fetched.json();
    console.log(res)
    return res;    
}