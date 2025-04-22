import { Children, createContext } from "react";
import { useState } from 'react'

export const contextTodo = createContext();

export function ContextProvider({children}){
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
      {
        todo : "Coding" ,
        id : Date.now() ,
        completed : false
      }]
    )
    const addTodo = (todo)=>{
      setTodos([...todos , {todo : todo ,  id : Date.now() ,
        completed : false}])
    }
    const handleDelete = (id)=>{
      const arr = [...todos]
      const ind = arr.findIndex((todo)=>todo.id == id)
      arr.splice(ind , 1) 
      setTodos([...arr])
    }

return(
 <contextTodo.Provider value={{todo , setTodo , todos , setTodos , addTodo , handleDelete}}>
    {children}
 </contextTodo.Provider>
)
}