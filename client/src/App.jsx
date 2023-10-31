import { useEffect, useState } from 'react';
import { PageLayout } from './components/PageLayout/PageLayout';
import { callApi } from './api';
import { API_BASE } from './api';
import { NewTodo } from './components/NewTodo/NewTodo';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(API_BASE + '/todos');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const json = await response.json();
      const data = json.todos;

      if (response.ok) {
        setTodos(data);
      }
    };

    fetchTodos();
  }, []);

  const completeTodo = async (id) => {
    const method = 'PATCH';
    const link = '/todo/complete/';

    await callApi(id, method, link);

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    );
  };

  const deleteTodo = async (id) => {
    const method = 'DELETE';
    const link = '/todo/delete/';

    await callApi(id, method, link);

    setTodos((todos) => todos.filter((todo) => todo._id !== id));
  };

  const addTodo = async () => {
    const method = 'POST';
    const link = '/todo/new';

    const json = await callApi(newTodo, method, link);

    setTodos([...todos, json]);
    setNewTodo('');
  };

  return (
    <PageLayout>
      <h2 className='text-3xl'>Todo Tasks</h2>
      <NewTodo value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onClick={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </PageLayout>
  );
}

export default App;
