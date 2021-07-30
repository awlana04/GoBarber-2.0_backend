import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled.div<ContainerProps>`
  width: 360px;
  padding: 16px 30px 16px 16px;

  ${props => toastTypeVariations[props.type || 'info']};

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  position: relative;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;

      font-size: 14px;
      line-height: 20px;

      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    color: inherit;
    border: 0;

    position: absolute;
    top: 19px;
    right: 16px;

    opacity: 0.6;
  }

  ${props => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;
