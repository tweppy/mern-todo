export const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <ul className='flex flex-col gap-2 overflow-y-auto pr-4'>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li
            key={todo._id}
            className='flex flex-row gap-2 items-center whitespace-normal max-w-full'
          >
            <div
              className={
                'cursor-pointer p-4 rounded-lg bg-base-300 w-full ' +
                (todo.complete ? 'line-through text-gray-600' : '')
              }
              onClick={() => completeTodo(todo._id)}
            >
              {todo.text}
            </div>
            <button
              className='btn btn-square btn-outline btn-error'
              onClick={() => deleteTodo(todo._id)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </li>
        ))
      ) : (
        <p className='text-center'>You currently have no tasks</p>
      )}
    </ul>
  );
};
