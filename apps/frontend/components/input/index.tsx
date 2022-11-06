import Typography from 'components/typography';
import { type } from 'os';
import classes from './input.module.scss';

interface Props {
  label?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number';
  helperText?: string;
}

const Input = ({
  value,
  onChange,
  label = '',
  type = 'text',
  helperText,
}: Props) => {
  return (
    <>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classes.Input}
        />
        <Typography rootTag="span" color="secondary">
          {helperText}
        </Typography>
      </label>
    </>
  );
};

export default Input;
