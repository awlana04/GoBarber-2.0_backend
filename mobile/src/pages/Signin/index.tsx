import React from 'react';
import { Image } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

const Signin: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={Logo} />

        <Title>Faça seu logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button onPress={() => { }}>Entrar</Button>

        <ForgotPassword onPress={() => { }}>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccountButton onPress={() => { }}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
}

export default Signin;
