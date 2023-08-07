export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-6 bg-black text-white tracking-tight cursor-pointer h-12"
    >
      {children}
    </button>
  );
};
