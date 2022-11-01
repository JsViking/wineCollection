import { ReactNode } from 'react';
import classes from './Button.module.scss';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = '' }: Props) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`${classes.Button} ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
