import { gql } from '@apollo/client';

const ME_QUERY = gql`
  query {
    me {
      id
      email
      profile {
        name
        avatar
        type
      }
    }
  }
`;

export default ME_QUERY;
