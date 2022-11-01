import { type } from 'os';
import classes from './input.module.scss';

interface Props {
  label?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number';
}

const Input = ({ value, onChange, label = '', type = 'text' }: Props) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classes.Input}
      />
    </label>
  );
};

export default Input;
