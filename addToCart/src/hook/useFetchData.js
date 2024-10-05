// custom Hook
async function useFetchData(){
    try{
        const data = await fetch("https://api.escuelajs.co/api/v1/products")
        const convert = await data.json();
        return convert
    }
    catch(e){
        console.log(e);
    }
    }


export default useFetchData


