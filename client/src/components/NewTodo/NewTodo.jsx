export const NewTodo = ({ value, onChange, onClick }) => {
  return (
    <div className='flex flex-row gap-4 pr-4'>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered input-primary w-full max-w-xs'
        onChange={onChange}
        value={value}
      />
      <button className='btn btn-primary' onClick={onClick}>
        add
      </button>
    </div>
  );
};
