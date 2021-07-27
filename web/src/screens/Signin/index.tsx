import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Logo, BackgroundImage, Links, ForgotPassword, AnotherProvider, Signup } from './styles';

const Login: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="186" height="162" />
        </Logo>

        <h1>Faça seu login</h1>

        <Form onSubmit={handleSubmit}>
          <Input
            id={'email'}
            name="email"
            type="text"
            icon={FiMail}
            placeholder={'E-mail'}
          />

          <Input
            id={'password'}
            name="password"
            type="password"
            icon={FiLock}
            placeholder={'Senha'}
          />

          <Button type="submit" disabled={false}>
            <span>Entrar</span>
          </Button>
        </Form>

        <Links>
          <ForgotPassword>
            <Link href="/forgot">Esqueci minha senha</Link>
          </ForgotPassword>

          <AnotherProvider>
            <p>Entrar com outro provedor</p>
          </AnotherProvider>

          <Signup>
            <FiLogIn size="20" />
            <Link href="/signup">Criar conta</Link>
          </Signup>
        </Links>
      </Content>

      <BackgroundImage>
        <Image src="/assets/background-image.png" alt="Background Image" layout='fill' />
      </BackgroundImage>
    </Container>
  );
};

export default Login;
