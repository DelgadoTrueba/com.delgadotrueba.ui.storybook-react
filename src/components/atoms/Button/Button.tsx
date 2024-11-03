import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button type="button">{label}</button>;
};

export { Button };
