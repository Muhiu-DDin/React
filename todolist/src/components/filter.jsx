export function FilterComp({filter , setFilter}){
    return(
        
    <div className='flex justify-around items-center mt-10'>
    <button className={`${filter == "All" ? 'bg-teal-600 text-white' : 'bg-teal-100'} px-3 py-1`} onClick={()=>setFilter("All")}>All</button>
    <button className={`${filter == "Completed" ? 'bg-teal-600 text-white': 'bg-teal-100'} px-3 py-1`} onClick={()=>setFilter("Completed")}>Completed</button>
    <button className={`${filter == "Pending" ? 'bg-teal-600 text-white' : 'bg-teal-100'} px-3 py-1`} onClick={()=>setFilter("Pending")}>Pending</button>
    </div>

    )
}