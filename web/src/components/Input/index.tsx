import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, InputField } from './styles';

interface InputProps {
  id: string;
  type: string;
  value: string;
  icon?: React.ComponentType<IconBaseProps>;
  placeholder?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, value, icon: Icon, placeholder, ref, onBlur, onChange }) => (
  <Container>
    {Icon && <Icon size={24} />}

    <InputField
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
    />
  </Container>
);

export default Input;
