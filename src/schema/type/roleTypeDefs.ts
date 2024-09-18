import { gql } from 'apollo-server-express';

export const roleTypeDefs = gql`
  type Role {
    id: ID!
    name: String!
    entitlements: [Entitlement!]!
  }
`;
