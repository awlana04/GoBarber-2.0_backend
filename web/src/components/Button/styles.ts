import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.6rem;
  padding: auto;
  cursor: pointer;
  background-color: ${({ theme }) => theme.elementsColors.button};
  border-radius: 0.35rem;
  color: ${({ theme }) => theme.fontColors.white};
  font-size: 0.9rem;
  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.elementsColors.buttonDisabled};
  }
`;
