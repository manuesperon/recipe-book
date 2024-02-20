interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-4 py-2 transition-all duration-300 ease-in-out shadow-xl hover:bg-cream text-xl text-grey-dark rounded-3xl bg-yellow-main"
    >
      {children}
    </button>
  );
};

export default Button;
