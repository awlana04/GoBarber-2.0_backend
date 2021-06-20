import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  svg {
    margin-top: 18px;
    margin-left: 14px;

    position: absolute;

    color: ${({ theme }) => theme.fonts.placeholder};
  }
`;

export const InputField = styled.input`
  width: 426px;
  height: 62px;

  background: #232129;
  border-radius: 0.78rem;

  ::placeholder {
    padding-left: 56px;

    color: ${({ theme }) => theme.fonts.placeholder};
    font-size: 20px;
  }

  :focus,
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
