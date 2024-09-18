// Role model 
import { Schema, model, Document } from 'mongoose';

interface IRole extends Document {
  name: string;
  description: string;
  entitlements: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const roleSchema = new Schema<IRole>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  entitlements: [{ type: Schema.Types.ObjectId, ref: 'Entitlement' }]
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Role = model<IRole>('Role', roleSchema);

export default Role;
