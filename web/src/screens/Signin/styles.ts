import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 50vw;

  h1 {
    margin: 34px 22px;

    color: ${({ theme }) => theme.fonts.white};
    font-size: 28px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  margin-top: 24px;
`;

export const Form = styled.form``;

export const Links = styled.div`
  margin-top: 42px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 32px;

    color: ${({ theme }) => theme.fonts.white};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ForgotPassword = styled.div``;

export const AnotherProvider = styled.div``;

export const Signup = styled.div`
  margin-top: 112px;

  display: flex;
  flex-direction: row;

  svg {
    margin-top: 2px;
    margin-right: 16px;
  }

  svg, a {
    color: ${({ theme }) => theme.colors.primary}
  }
`;

export const BackgroundImage = styled.div`
  width: 50vw;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
`;
