import Entitlement, { IEntitlement } from '../models_+olt/entitlement';
import Role from '../models_+olt/role';

export const entitlementResolver = {
  Query: {
    getEntitlements: async () => {
      try {
        const entitlements = await Entitlement.find();
        return entitlements;
      } catch (error) {
        throw new Error('Error fetching entitlements');
      }
    },
  },
  Mutation: {
    createEntitlement: async (_: any, { name, description }: IEntitlement) => {
      try {
        // Check if the entitlement already exists
        const existingEntitlement = await Entitlement.findOne({ name });
        if (existingEntitlement) {
          throw new Error(`Entitlement with the name "${name}" already exists.`);        }

        // Create a new entitlement
        const newEntitlement = new Entitlement({ name, description });
        return await newEntitlement.save();
      } catch (error: any) {
        throw new Error(error.message || 'Error creating entitlement');
      }
    },

    assignEntitlementToRole: async (_: any, { roleId, entitlementId }: { roleId: string, entitlementId: string }) => {
      try {
        // Find the role by ID
        const role = await Role.findById(roleId);
        if (!role) {
          throw new Error('Role not found');
        }

        // Check if the entitlement exists
        const entitlement = await Entitlement.findById(entitlementId);
        if (!entitlement) {
          throw new Error('Entitlement not found');
        }

        // Check if the entitlement is already assigned to the role
        if (role.entitlements.includes(entitlementId)) {
          throw new Error('Entitlement already assigned to this role');
        }

        // Add entitlement to the role
        role.entitlements.push(entitlementId);
        await role.save();

        return role;
      } catch (error) {
        throw new Error('Error assigning entitlement to role');
      }
    },
  },
};
