import { gql } from 'apollo-server-express';
import { userTypeDefs } from './type/userTypeDefs';
import { roleTypeDefs } from './type/roleTypeDefs';
import { entitlementTypeDefs } from './type/entitlementTypeDefs';
import { queryTypeDefs } from './query/queryTypeDefs';
import { mutationTypeDefs } from './mutaion/mutationTypeDefs';


export const typeDefs = [
  userTypeDefs,
  roleTypeDefs,
  entitlementTypeDefs,
  queryTypeDefs,
  mutationTypeDefs,
];