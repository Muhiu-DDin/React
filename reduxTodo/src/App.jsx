import { useState } from 'react'
import { TodoForm } from './components/todoForm'
import {TodoList} from "./components/todoList"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <TodoForm/>
          <TodoList/>
          
      </>
  )
}

export default App
