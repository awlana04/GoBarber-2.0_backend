import { gql } from '@apollo/client';

const ME_QUERY = gql`
  query {
    me {
      id
      image
      name
      email
    }
  }
`;

export default ME_QUERY;
