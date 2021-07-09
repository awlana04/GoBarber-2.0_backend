import { gql } from '@apollo/client';

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile($avatar: String, $type: Boolean!) {
    createProfile(avatar: $avatar, type: $type) {
      id
    }
  }
`;

export default CREATE_PROFILE_MUTATION;
