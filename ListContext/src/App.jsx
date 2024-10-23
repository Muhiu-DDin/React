import {useEffect } from 'react'
import TodoForm from './components/form'
import Lists from './components/list'
import { useContext } from 'react'
import { toDoContext } from './context/listContext'



function App() {
const {todo , setTodo , todos , setTodos} = useContext(toDoContext);

useEffect(
  ()=>{
    const got = JSON.parse(localStorage.getItem('todos'));
    if(got){
    setTodos([...got])
    }
  } , []
)
useEffect(
  ()=>{
      localStorage.setItem("todos" , JSON.stringify(todos));
  } , [todos]
)

  return (
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    <Lists/>
                    </div>
                </div>
</div>
  )
}

export default App
