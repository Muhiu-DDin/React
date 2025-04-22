import { useContext, useState } from "react";
import {contextTodo} from "../context"

export function Input() {
  const { todo, setTodo, addTodo } = useContext(contextTodo);

  const handleAdd = () => {
    if (todo.trim()) {
      addTodo(todo);
      setTodo(""); // Clear the input after adding
    }
  };

  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="px-5 w-[250px] h-[40px] rounded-md outline-none border border-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="text-white rounded-md text-xl font-bold"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}
