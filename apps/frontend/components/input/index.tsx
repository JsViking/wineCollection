import classes from './input.module.scss';
import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={classes.Input}
    />
  );
};

export default Input;
