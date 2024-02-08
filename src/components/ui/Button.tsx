interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-4 py-2 transition-all duration-300 ease-in-out shadow-xl hover:bg-cream hover:text-green-dark text-green-950 rounded-3xl bg-yellow-main"
    >
      {children}
    </button>
  );
};

export default Button;
