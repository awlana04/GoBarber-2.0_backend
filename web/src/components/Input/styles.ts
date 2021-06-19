import styled from 'styled-components';

export const Container = styled.div`
  max-width: 25.6rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputField = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.elementsColors.border};
  border-radius: 0.35rem;
  ::placeholder {
    color: ${({ theme }) => theme.fontColors.placeholder};
  }
  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.elementsColors.borderFocus};
  }
`;
