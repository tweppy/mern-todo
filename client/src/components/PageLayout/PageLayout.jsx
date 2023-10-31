export const PageLayout = ({ children }) => {
  return (
    <div className='hero min-h-screen bg-base-300'>
      <div className='flex flex-col artboard phone-2 p-4 gap-4 bg-base-100 rounded-lg'>
        {children}
      </div>
    </div>
  );
};
