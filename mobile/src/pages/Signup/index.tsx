import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import { Container, Title, BackToSigninButton, BackToSigninButtonText } from './styles';

const Signup: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image source={Logo} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Input name="confirmPassword" icon="lock" placeholder="Confirmar Senha" />

            <Button onPress={() => { }}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSigninButton onPress={() => navigation.navigate('Signin')}>
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToSigninButtonText>Voltar para o logon</BackToSigninButtonText>
      </BackToSigninButton>
    </>
  )
}

export default Signup;
