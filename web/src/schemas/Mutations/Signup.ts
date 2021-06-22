import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation signup($image: String, $type: Boolean!, $name: String!, $email: String!, $password: String!) {
    signup(image: $image, type: $type, name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export default SIGNUP_MUTATION;
