import { gql } from '@apollo/client';

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile($avatar: String, $name: String) {
    createProfile(avatar: $avatar, name: $name) {
      id
    }
  }
`;

export default CREATE_PROFILE_MUTATION;
