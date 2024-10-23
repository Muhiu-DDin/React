import { createContext, useState } from "react";

export const toDoContext = createContext();

export const TodoContextProvider = ({children})=> {
const [todo , setTodo] = useState("");
const [todos , setTodos] = useState([
    {
        todo : "your task" ,
        id : Date.now(),
        completed : false
    }
]);
    return(
        <toDoContext.Provider value={{todo , setTodo , todos , setTodos}}>
            {children}
        </toDoContext.Provider>
    )
}