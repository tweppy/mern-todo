import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="flex flex-col gap-2">
      {todos.length === 0 && "No Todos"}

      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo._id} text={todo.text} />;
      })}
    </ul>
  );
};
