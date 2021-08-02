import styled, { css } from 'styled-components';

import Tooltip from '../Tootip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;

  background: ${({ theme }) => theme.fonts.grayHard};

  border: 2px solid ${({ theme }) => theme.fonts.grayHard};
  border-radius: 10px;

  color: ${({ theme }) => theme.fonts.placeholder};

  display: flex;
  align-items: center;

  &:focus {
    background: #fff;
  }

  & ::placeholder {
    color: ${({ theme }) => theme.fonts.placeholder};
  }

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53939;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  input {
    background: transparent;

    color: ${({ theme }) => theme.fonts.white};
    font-size: 16px;

    flex: 1;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 24px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
