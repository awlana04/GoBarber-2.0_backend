import { gql } from '@apollo/client';

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile($id: String!, $name: String, $avatar: String, $type: Boolean) {
    createProfile(id: $id, name: $name, avatar: $avatar, type: $type) {
      id
    }
  }
`;

export default CREATE_PROFILE_MUTATION;
