import { ButtonHTMLAttributes } from 'react';

type Variant = 'big' | 'small' | '';

type Color = 'red' | 'green';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  color: Color;
};

export const Button = ({ color, variant, children, onClick, className, ...props }: Props) => {
  const baseClass =
    ' text-white text-[18px] leading-[17px] transform transition-transform duration-200 active:scale-90';
  const colorClass = {
    red:
      variant === 'big'
        ? 'px-[19px] py-[18px] bg-[var(--red-buttons)] font-medium rounded-[11px]'
        : 'px-[18px] py-[5px] bg-[var(--red-buttons)] font-normal rounded-[10px]',
    green: variant === 'big' && 'px-[76px] py-[26.5px] bg-[#306F5E] font-medium rounded-[11px]',
  };

  const selectedClass = colorClass[color];

  return (
    <button className={`${selectedClass} ${baseClass} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
