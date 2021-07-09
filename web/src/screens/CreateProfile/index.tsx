import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { FiCamera } from 'react-icons/fi';

import CREATE_PROFILE_MUTATION from '../../schemas/Mutations/CreateProfile';

import { Container, BackgroundImage, Content, Logo, Form, UploadAvatar } from './styles';
import ME_QUERY from '../../schemas/Query/Me';

const CreateProfile: React.FC = () => {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const data = new FormData();

    data.append('file', files[0]);
    data.append('upload_preset', 'dmgkfffzb');

    setImageLoading(true);

    const response = await fetch(process.env.CLOUDINARY_API_URL, {
      method: 'POST',
      body: data,
    })

    const file = await response.json();

    setImage(file.secure_url);
    setImageLoading(false);
  }

  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const [createProfile] = useMutation(CREATE_PROFILE_MUTATION, {
    variables: {
      image: '',
      type: false,
    }
  })

  const initialValues = {
    image: '',
    type: false,
  }

  const validate = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      await createProfile({
        variables: { ...values, image },
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

        <Form>

        </Form>
        <UploadAvatar>
          {imageLoading ? (

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

            <input name="file" id="avatar" type="file" onChange={addImage} ref={inputFile} />
          </label>
        </UploadAvatar>
      </Content>
    </Container>
  )
}

export default CreateProfile;
