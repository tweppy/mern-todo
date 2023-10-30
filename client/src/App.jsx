import { useEffect, useState } from "react";

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

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <p key={todo._id}>{todo.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
