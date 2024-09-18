// Role resolver 
import Role from '../models_+olt/role';
import Entitlement from '../models_+olt/entitlement';

export const roleResolver = {
  Query: {
    getRoles: async () => await Role.find().populate('entitlements'),
  },
  Mutation: {
    createRole: async (_: any, { name }: { name: string }) => {
      const role = new Role({ name });
      return await role.save();
    },
    assignEntitlementToRole: async (_: any, { roleId, entitlementId }: { roleId: string, entitlementId: string }) => {
      const role = await Role.findById(roleId);
      if (!role) throw new Error('Role not found');
      role.entitlements.push(entitlementId);
      return await role.save();
    },
  }
};
