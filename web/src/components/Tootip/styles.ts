import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    left: 50%;
    bottom: calc(100% + 12px);

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    transform: translateX(-50%);

    &::before {
      border-width: 6px 6px 0 6px;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.primary} transparent;

      position: absolute;
      top: 100%;
      left: 47%;

      content: '';
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
