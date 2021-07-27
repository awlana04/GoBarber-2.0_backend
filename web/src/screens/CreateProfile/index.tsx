import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiCamera, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, BackgroundImage, Content, Logo, UploadAvatar } from './styles';

const CreateProfile: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <BackgroundImage>
        <Image src="/assets/background.png" alt="Background" layout='fill' />
      </BackgroundImage>

      <Content>
        <Logo>
          <Image src="/assets/logo.svg" alt="GoBarber-2.0 Logo" width="226" height="192" />
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Input
            id={'name'}
            name="name"
            type="text"
            icon={FiUser}
            placeholder={'Nome de usuário'}
          />

          <Button type="submit" disabled={false}>
            <span>Cadastrar</span>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default CreateProfile;
