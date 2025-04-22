import { Input } from './components/input'
import {contextTodo} from './context'
import { useContext } from 'react'
// ❌ ✏️ 📁

function App() {
    const {todo , setTodo , todos , setTods} = useContext(contextTodo)

    const AddTodo = (todo)=>{
        setTods(...todos , {todo : todo})
    }
    
  return (
    <div className="flex min-h-screen flex-col px-6  lg:px-8 bg-gray-800">
      <h1 className='text-center text-3xl pt-5 text-white'>Todo List</h1>
    <div className="mt-20 mx-auto w-[25rem] flex flex-col border rounded-lg p-6">
      <Input todo={todo} setTodo={setTodo} AddTodo = {AddTodo}/>

    </div>
    </div>
  )
}

export default App
