import { userResolver } from './userResolver';
import { roleResolver } from './roleResolver';
import { entitlementResolver } from './entitlementResolver';
import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date scalar type',
    serialize(value) {
      return value instanceof Date ? value.toISOString() : null;
    },
    parseValue(value) {
      return value ? new Date(value) : null;
    },
    parseLiteral(ast) {
      return ast.kind === Kind.STRING ? new Date(ast.value) : null;
    },
  });

const resolvers = {
    Date: dateScalar,
    Query: {
      ...userResolver.Query,
      ...roleResolver.Query,
      ...entitlementResolver.Query,
    },
    Mutation: {
      ...userResolver.Mutation,
      ...roleResolver.Mutation,
      ...entitlementResolver.Mutation,
    },
  };

export default resolvers;