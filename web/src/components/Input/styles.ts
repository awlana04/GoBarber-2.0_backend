import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  svg {
    margin-top: 18px;
    margin-left: 14px;

    position: absolute;

    color: ${({ theme }) => theme.fonts.placeholder};

    ${props => props.isFocused && css`
      color: ${({ theme }) => theme.colors.primary};
    `}

    ${props => props.isFilled && css`
      color: ${({ theme }) => theme.colors.primary};
    `}
  }

  input {
    width: 386px;
    height: 56px;
    padding-left: 56px;

    background: ${({ theme }) => theme.fonts.grayHard};
    border-radius: 0.78rem;

    color: ${({ theme }) => theme.fonts.placeholder};
    font-size: 18px;

    ${props => props.isFocused && css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}
  }
`;
