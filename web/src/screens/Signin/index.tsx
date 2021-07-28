import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Logo, BackgroundImage, Links, ForgotPassword, AnotherProvider, Signup } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      formRef.current?.setErrors({
        email: 'Email é obrigatório',
        password: 'Senha é obrigatória e deve conter no mínimo 6 caracteres'
      })
    }
  }, [])

  return (
    <Container>
      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="186" height="162" />
        </Logo>

        <h1>Faça seu login</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
