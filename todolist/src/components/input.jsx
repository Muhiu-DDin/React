export function Input({value , setTodo , handleAdd}){
    return(
        <>
        <h1 className='text-center mt-5 text-2xl'>To Do List</h1>
        <div className='w-1/2 mx-auto flex justify-center mt-10'>
          <input type="text" value={value} onChange={(e)=>setTodo(e.target.value)} className='outline w-[250px] pl-2'/>
          <button className='outline ml-5 px-2 py-1'
          style={{background : value == "" && "grey"}}
          disabled = {value == ""}
          onClick={()=>handleAdd()}>Add</button>
        </div>
        </>
    )
}