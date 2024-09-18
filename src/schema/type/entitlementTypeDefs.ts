import { gql } from 'apollo-server-express';

export const entitlementTypeDefs = gql`
  
 type Entitlement {
    id: ID!
    name: String!
    description: String!
    createdAt: Date
    updatedAt: Date
  }
`;
