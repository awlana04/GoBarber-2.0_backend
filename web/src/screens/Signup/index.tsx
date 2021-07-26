import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import SIGNUP_MUTATION from '../../schemas/Mutations/Signup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, BackgroundImage, Content, Logo, Form, Login } from './styles';

const Signup: React.FC = () => {
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: '',
      email: '',
      password: '',
    }
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm your password').oneOf([Yup.ref('password'), null], 'Password must match')
  });

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const response = await signup({
        variables: values as any,
      });

      localStorage.setItem('token', response.data.signup.token);

      setSubmitting(false);
    }
  });

  return (
    <Container>
      <BackgroundImage>
        <Image src="/assets/background.png" alt="Background" layout='fill' />
      </BackgroundImage>

      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="226" height="192" />
        </Logo>

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

          <Input
            id={'confirmPassword'}
            type="password"
            icon={FiLock}
            placeholder={'Confirmar senha'}
            value={validate.values.confirmPassword}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
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
