export const PageLayout = ({ children }) => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="flex flex-col artboard phone-2 border p-4 gap-4">{children}</div>
    </div>
  );
};
