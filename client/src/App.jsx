import { useEffect, useState } from "react";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { TodoList } from "./components/TodoList/TodoList";

const API_BASE = "http://localhost:4000/api";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(API_BASE + "/todos");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      const data = json.todos;

      if (response.ok) {
        setTodos(data);
      }
    };

    fetchTodos();
  }, []);

  // add todo
  // update AKA completed
  // delete

  return (
    <PageLayout>
      <h4>Todo List</h4>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary">add</button>
      </div>
{/* 
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li className="p-4 rounded-lg bg-base-300 flex flex-row gap-4" key={todo._id}>
            <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
            {todo.text}
          </li>
        ))}
      </ul> */}
      <TodoList todos={todos} />
    </PageLayout>
  );
}

export default App;
