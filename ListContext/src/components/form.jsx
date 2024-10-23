import { useContext } from "react";
import { toDoContext } from "../context/listContext";



function TodoForm() {
    const {todo , setTodo , todos , setTodos} = useContext(toDoContext);
    
    const handleTodo = (e)=>{
        setTodo(e.target.value)
    }
    const handleAdd = ()=>{
        setTodos(
            [...todos , {
                todo : todo , 
                id : Date.now(),
                completed : false
            }]
        );
        setTodo("");
    }
    
    return (
        <form  className="flex" onSubmit={(e)=>e.preventDefault()}>
            <input
                value={todo}
                onChange={handleTodo}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={handleAdd} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

