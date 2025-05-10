export const Button = ({
  children,
  type,
  onClick,
}: {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
