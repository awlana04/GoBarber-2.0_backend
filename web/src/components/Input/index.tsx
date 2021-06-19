import React from 'react';

import { Container, InputField } from './styles';

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, value, placeholder, onBlur, onChange }) => (
  <Container>
    <InputField type={type} value={value} placeholder={placeholder} onBlur={onBlur} onChange={onChange} />
  </Container>
)

export default Input;
