import React from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ type, disabled, onClick, children }) => (
  <ButtonContainer type={type} disabled={disabled} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button;
