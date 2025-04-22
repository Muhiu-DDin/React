import { useContext, useState } from "react";
import {contextTodo} from "../context"

export function List(){
    const [edit , setEdit] = useState()
    const [editId , setEditId] = useState(null)
    const {todos , setTodos , handleDelete} = useContext(contextTodo)

    const handleEdit = (id , curr)=>{
        if(id == editId){
            setTodos(
                todos.map(
                    (obj)=>(
                        obj.id == id ? {...obj , todo : edit} :obj
                    )
                )
            )
            setEditId(null)
        }else{
            setEditId(id)
        }
    }

    return(
<div>
{todos.map((todo) => (
    <div
        key={todo.id}
        className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
        <input
            type="text"
            value={editId === todo.id ? edit : todo.todo}
            onChange={(e) => setEdit(e.target.value)}
            readOnly={editId !== todo.id}
            className={`border outline-none w-full bg-transparent rounded-lg ${
              editId === todo.id ? "border-black/10 px-2" : "border-transparent"
            }`}
        />
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => handleEdit(todo.id, todo.todo)}
        >
            {editId === todo.id ? "📁" : "✏️"}
        </button>
        <button
            onClick={() => handleDelete(todo.id)}
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        >
            ❌
        </button>
    </div>
))}

</div>
    )
}
