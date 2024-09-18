import { gql } from "apollo-server-express";

export const mutationTypeDefs = gql`
  type Mutation {
    createUser(username: String!, first_name: String!, last_name: String!, email: String!, phone_number: String!, status: String!, profile_image_url: String!, created_at: Date!, updated_at: Date!, last_login: Date!, date_of_birth: Date!, address: String!, gender: String!, bio: String!, is_verified: Boolean!, preferences: String!, refreshToken: String!, password: String!): User
    createRole(name: String!): Role
    createEntitlement(name: String!, description: String!): Entitlement
    assignEntitlementToRole(roleId: ID!, entitlementId: ID!): Role
    assignRoleToUser(userId: ID!, roleId: ID!): User
    login(username: String!, password: String!): String
  }
`;

