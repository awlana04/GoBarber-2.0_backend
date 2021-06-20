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

export const Footer = styled.footer`
  /* width: 90%;
  margin: 0 auto;

  font-size: 0.8rem;

  display: flex;
  justify-content: space-around; */
`;

export const BackgroundImage = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;
