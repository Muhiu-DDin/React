export function List({todos , remove , taskCompleted}){
    return(
        <>
        {
            todos.map(
              (data)=>(
                <div key={data.id} className='mx-auto w-1/2 flex justify-between mt-10'>
                  <h1 
                  style= {{textDecoration : data.completed && "line-through"}}
                  onClick={()=>taskCompleted(data.id)} className='mr-10 cursor-pointer'>{data.todo}</h1>
                  <button className='outline ml-5 px-2'
                  onClick={()=>{
                    remove(data.id)
                    }}>Delete</button>
                </div>
              )
            )
          }
    </>
    )
}
