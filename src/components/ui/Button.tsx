interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  href,
  target,
  rel,
}: ButtonProps) {
  const base = 'px-6 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer inline-block text-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}