import React from 'react';
import { View, Text, Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => { }}>Entrar</Button>
    </Container>
  )
}

export default Signin;
