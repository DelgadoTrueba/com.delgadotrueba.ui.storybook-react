import { useState } from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [name, setName] = useState<string>(label);

  const handleClick = () => {
    setName('1');
  };

  return (
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  );
};

export { Button };
