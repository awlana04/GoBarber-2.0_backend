import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';

import SIGNIN_MUTATION from '../../schemas/Mutations/Signin';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Logo, Form, Footer, BackgroundImage } from './styles';

const Login: React.FC = () => {
  const [signin] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: '',
      password: '',
    }
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Very short'),
  })

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const response = await signin({
        variables: values as any,
      });

      localStorage.setItem('token', response.data.signup.token);

      setSubmitting(false);
    }
  });

  return (
    <Container>
      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="226" height="192" />
        </Logo>

        <h1>Faça seu login</h1>

        <Form onSubmit={validate.handleSubmit}>
          <Input
            id={'email'}
            type="text"
            icon={FiMail}
            placeholder={'E-mail'}
            value={validate.values.email}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
          />

          <Input
            id={'password'}
            type="password"
            icon={FiLock}
            placeholder={'Senha'}
            value={validate.values.password}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
          />

          <Button type="submit" disabled={false}>
            <span>Entrar</span>
          </Button>
        </Form>

        {/* <Footer>
          <Link href="/signup">Cadastra-se</Link>
        </Footer> */}
      </Content>

      <BackgroundImage>
        <Image src="/assets/background-image.png" alt="Background Image" layout='fill' />
      </BackgroundImage>
    </Container>
  );
};

export default Login;
