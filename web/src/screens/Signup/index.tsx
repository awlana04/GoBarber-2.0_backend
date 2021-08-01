import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, BackgroundImage, Content, Logo, Login } from './styles';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const Router = useRouter();

  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required().email('Digite um email válido'),
        password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
        // confirmPassword: Yup.string().required().oneOf()
      })

      await schema.validate(data, {
        abortEarly: false
      });

      Router.push('/dashboard');
    } catch (err) {
      formRef.current?.setErrors({
        name: 'Nome é obrigatório',
        email: 'Email é obrigatório',
        password: 'Senha é obrigatória e deve conte no mínimo 6 caracteres'
      })
    }
  }, [])

  return (
    <Container>
      <BackgroundImage>
        <Image src="/assets/background.png" alt="Background" layout='fill' />
      </BackgroundImage>

      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="226" height="192" />
        </Logo>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            id={'name'}
            name="name"
            type="text"
            icon={FiUser}
            placeholder={'Nome'}
          />

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
