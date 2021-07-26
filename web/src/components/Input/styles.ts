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
  width: 386px;
  height: 56px;
  padding-left: 56px;

  background: ${({ theme }) => theme.fonts.grayHard};
  border-radius: 0.78rem;

  color: ${({ theme }) => theme.fonts.placeholder};
  font-size: 18px;

  :focus,
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
