import { Schema, model, Document } from 'mongoose';

export interface IEntitlement extends Document {
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const entitlementSchema = new Schema<IEntitlement>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Entitlement = model<IEntitlement>('Entitlement', entitlementSchema);

export default Entitlement;
