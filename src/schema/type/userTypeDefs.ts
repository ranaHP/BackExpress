import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
 scalar Date
  type User {
    id: ID!
    username: String!
    roles: [Role!]!
    first_name: String!
    last_name: String!
    email: String!
    phone_number: String!
    status: String!
    profile_image_url: String!
    created_at: Date!
    updated_at: Date!
    last_login: Date!
    date_of_birth: Date!
    address: String!
    gender: String!
    bio: String!
    is_verified: Boolean!
    preferences: String!
    refreshToken: String!
    password: String!
  }
`;
