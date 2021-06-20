import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 426px;
  height: 62px;
  margin-top: 22px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.78rem;

  color: ${({ theme }) => theme.fonts.dark};
  font-size: 20px;
  font-weight: 500;

  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.elements.buttonDisabled};
  }
`;
