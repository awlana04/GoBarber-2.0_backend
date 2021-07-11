import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiCamera, FiUser } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Query/Me';
import CREATE_PROFILE_MUTATION from '../../schemas/Mutations/CreateProfile';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, BackgroundImage, Content, Logo, Form, UploadAvatar } from './styles';

const CreateProfile: React.FC = () => {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [avatar, setAvatar] = useState('');
  const [avatarLoading, setAvatarLoading] = useState(false);

  const addAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const data = new FormData();

    data.append('file', files[0]);
    data.append('upload_preset', 'dmgkfffzb');

    setAvatarLoading(true);

    const response = await fetch(process.env.CLOUDINARY_API_URL, {
      method: 'POST',
      body: data,
    })

    const file = await response.json();

    setAvatar(file.secure_url);
    setAvatarLoading(false);
  }

  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const [createProfile] = useMutation(CREATE_PROFILE_MUTATION, {
    variables: {
      id: '',
      name: '',
      avatar: '',
      type: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
  })

  const initialValues = {
    id: data.me.id,
    name: '',
    avatar: '',
    type: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required()
  })

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      await createProfile({
        variables: { ...values, avatar },
      })

      setSubmitting(false);
    }
  })

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
          <UploadAvatar>
            {avatarLoading ? (
              <Image src="/assets/avatar.svg" alt="Barber's avatar" width="112" height="86" />
            ) : (
              <>
                {data.me.image ? (
                  <Image src={data.me.image} alt={`${data.me.name}'s avatar`} width="112" height="86" />
                ) : (
                  <Image src="/assets/avatar.svg" alt="Barber's avatar" width="112" height="86" />
                )}
              </>
            )}

            <label htmlFor="avatar">
              <FiCamera width="22" />

              <input name="file" id="avatar" type="file" onChange={addAvatar} ref={inputFile} />
            </label>
          </UploadAvatar>

          <Input
            id={'name'}
            type="text"
            icon={FiUser}
            placeholder={'Nome de usuário'}
            value={validate.values.name}
            onBlur={validate.handleBlur}
            onChange={validate.handleChange}
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
