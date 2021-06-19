import React from 'react';
import Image from 'next/image';

import { Container, Content, Logo, BackgroundImage } from './styles';

const Signup: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="Background Image" width="192" height="192" />
        </Logo>

        <h1>Faça seu login</h1>
      </Content>

      <BackgroundImage>
        <Image src="/assets/background-image.png" alt="Background Image" layout='fill' />
      </BackgroundImage>
    </Container>
  )
}

export default Signup;
