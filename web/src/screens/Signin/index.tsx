import React from 'react';
import Image from 'next/image';
import { Form, useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { FiMail } from 'react-icons/fi';

import SIGNIN_MUTATION from '../../schemas/Mutations/Signin';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Logo, BackgroundImage } from './styles';

const Signin: React.FC = () => {
  const [signin] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: '',
      password: '',
    }
  })

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().required('Password is required')
  })

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const response = await signin({
        variables: values
      })

      localStorage.setItem('token', response.data.signin.token);

      setSubmitting(false);
    }
  })

  return (
    <Container>
      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="Background Image" width="192" height="192" />
        </Logo>

        <h1>Faça seu login</h1>

        <Form onSubmit={validate.handleSubmit}>
          <Input
            id={'email'}
            type="text"
            placeholder="E-mail"
            value={validate.values.email}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
          />

          <Input
            id={'password'}
            type="password"
            placeholder="Senha"
            value={validate.values.email}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
          />

          <Button type="submit" disabled={false}>Entrar</Button>
        </Form>
      </Content>

      <BackgroundImage>
        <Image src="/assets/background-image.png" alt="Background Image" layout='fill' />
      </BackgroundImage>
    </Container>
  )
}

export default Signin;
