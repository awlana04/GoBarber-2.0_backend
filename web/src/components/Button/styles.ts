import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 386px;
  height: 56px;
  margin-top: 22px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.78rem;

  color: ${({ theme }) => theme.fonts.dark};
  font-size: 18px;
  font-weight: 500;

  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.elements.buttonDisabled};
  }
`;
