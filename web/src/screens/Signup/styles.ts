import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.background};
`;

export const BackgroundImage = styled.div`
  width: 50vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 50vw;
  margin-top: 22px;

  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  margin-top: 88px;

  display: flex;
  flex-direction: row;

  svg {
    margin-top: 2px;
    margin-right: 16px;
  }

  svg, a {
    color: ${({ theme }) => theme.fonts.white}
  }
`;
