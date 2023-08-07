export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 mt-8 shadow-lg rounded-2xl p-6 bg-white items-center">
      {children}
    </div>
  );
};
