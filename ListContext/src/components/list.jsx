import { useContext, useState } from "react";
import { toDoContext } from "../context/listContext";

function Lists() {
  const { todos, setTodos } = useContext(toDoContext);
  const [editableTodoId , setEditableTodoId] = useState(null);
  const [editTodo , setEditTodo] = useState("");


  const handleDelete = (id) => {
    setTodos(todos.filter((obj) => obj.id !== id));
  };

  const handleEdit = (id , curr)=>{
    if (editableTodoId === id){
        setTodos(
            todos.map(
                (obj)=> obj.id === id ? {...todos , todo : editTodo} : obj
            )
        )
        setEditableTodoId(null)
    }
    else{
        setEditableTodoId(id);
        setEditTodo(curr);
    }
  }

  return (
    <>
      {todos.map((data) => (
        <div
          key={data.id}
          className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
            data.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
        >
          <input
            value={editableTodoId === data.id ? editTodo : data.todo}
            onChange={(e)=>setEditTodo(e.target.value)}
            type="text"
            readOnly = {editableTodoId !== data.id}
            className={`border outline-none w-full bg-transparent rounded-lg ${
              editableTodoId === data.id ? "border-black/10 px-2" : "border-transparent"
            }`}
          />

          <button
            onClick={() => handleEdit(data.id , data.todo)}
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          >
            {editableTodoId === data.id ? "📁" : "✏️"}
          </button>

          <button
            onClick={() => handleDelete(data.id)}
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default Lists;
