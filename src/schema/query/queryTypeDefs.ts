import { gql } from 'apollo-server-express';

export const queryTypeDefs = gql`
  type Query {
    getUsers: [User!]
    getRoles: [Role!]
    getEntitlements: [Entitlement!]
  }
`;
