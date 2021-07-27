import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, BackgroundImage, Content, Logo, Form, Login } from './styles';

const Signup: React.FC = () => {
  return (
    <Container>
      <BackgroundImage>
        <Image src="/assets/background.png" alt="Background" layout='fill' />
      </BackgroundImage>

      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="226" height="192" />
        </Logo>

        <Form>
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

          <Input
            id={'confirmPassword'}
            name="confirmPassword"
            type="password"
            icon={FiLock}
            placeholder={'Confirmar senha'}
          />

          <Button type="submit" disabled={false}>
            <span>Cadastrar</span>
          </Button>
        </Form>

        <Login>
          <FiArrowLeft size="20" />
          <Link href="/">Voltar para o login</Link>
        </Login>
      </Content>
    </Container >
  );
};

export default Signup;
