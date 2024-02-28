import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'rounded-3xl bg-yellow-main px-4 py-2 text-xl text-grey-dark shadow-xl transition-all duration-300 ease-in-out hover:bg-cream',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
