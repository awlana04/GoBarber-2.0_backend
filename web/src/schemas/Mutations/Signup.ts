import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation signup($image: String, $name: String!, $email: String!, $password: String!) {
    signup(image: $image, name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export default SIGNUP_MUTATION;
