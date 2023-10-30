export const TodoItem = ({ text, completed, toggleTodo, deleteTodo }) => {
  return (
    <li className='p-4 rounded-lg bg-base-300 flex flex-row gap-4'>
      {/* <input type="checkbox" id="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} /> */}
      <input type='checkbox' checked={completed} className='checkbox checkbox-primary' />
      {text}
      {/* <button className="btn btn-delete">Delete</button> */}
    </li>
  );
};
