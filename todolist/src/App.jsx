import { useState, useCallback } from 'react';
import { Input } from './components/input';
import { List } from './components/list';
import { FilterComp } from './components/filter';


function App() {

  const [filter, setFilter] = useState("All");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "coding",
      id: Date.now(),
      completed: false
    }
  ]);

  const handleAdd = useCallback(() => {
    setTodos([...todos, {
      todo: todo,
      id: Date.now(),
      completed: false
    }])
    setTodo("")
  }, [todo])

  const remove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }
    , [todos])

  const taskCompleted = (id) => {
    const arr = [...todos]
    const obj = arr.findIndex((data) => data.id == id)
    arr[obj].completed = !arr[obj].completed
    console.log(arr[obj])
    setTodos([...arr])
  }

  const totoFilter = todos.filter(
    (data) => {
      if (filter == "All") {
        return true
      }
      if (filter == "Completed" && data.completed) {
        return true
      }
      if (filter == "Pending" && !data.completed) {
        return true
      }
    }
  )


return (
  <div className='mx-auto w-1/2'>
    <Input value={todo} setTodo={setTodo} handleAdd={handleAdd} />

    <FilterComp filter={filter} setFilter={setFilter} />

    <List todos={totoFilter} remove={remove} taskCompleted={taskCompleted} />
  </div>
);

}
export default App;
