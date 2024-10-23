import { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { getTodos, addTodo } from './promise';

function App() {
  const [todo, setTodo] = useState('');
  const { data: serverData = [], isLoading: isFetching, isError } = useQuery('todos', getTodos);
  const [localState, setLocalState] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('savedData'));
    if (savedTodos && savedTodos.length > 0) {
      setLocalState(savedTodos);
    } else if (serverData.length > 0) {
      setLocalState(serverData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedData', JSON.stringify(localState));
  }, [localState]);

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return addTodo(newTodo);
    },
    onSuccess: (newTodos) => {
      setLocalState(newTodos);
      setTodo('');
    }
  });

  if (isFetching) return <div>Loading todos...</div>;
  if (isError) return <div>Error fetching todos!</div>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-10 text-center text-2xl mt-5">Todo with React Query</h1>
      <div className="min-h-96 w-[30rem] border-black flex flex-col items-center mx-auto border rounded-lg px-5">
        <div className="mt-10 flex w-full justify-center gap-5">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter your todos"
            className="px-3 py-2 border border-black outline-none rounded-md"
            type="text"
          />
          <button
            onClick={() => {
              mutation.mutate(todo);
            }}
            className="bg-black text-white rounded-md px-4 py-1"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
        <ul className="mt-5 w-full border rounded-lg overflow-hidden pl-5 list-disc">
          {localState.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 border-b last:border-b-0 hover:bg-gray-100 transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
