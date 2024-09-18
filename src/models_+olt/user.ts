// User model 
import mongoose, { Schema, model, Document } from 'mongoose';

export interface IAddress {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zipCode: { type: String, required: false },
  country: { type: String, required: false }
});

export interface IUser extends Document {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  status: string;
  profile_image_url?: string;
  created_at: Date;
  updated_at: Date;
  last_login?: Date;
  date_of_birth?: Date;
  address?: IAddress;
  gender?: string;
  bio?: string;
  is_verified: boolean;
  preferences?: Record<string, unknown>;
  refreshToken: string;
  password: string;
  roles: mongoose.Schema.Types.ObjectId[];
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  status: { type: String, required: true }, 
  profile_image_url: { type: String }, 
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_login: { type: Date }, 
  date_of_birth: { type: Date }, 
  address: { type: addressSchema }, 
  gender: { type: String }, 
  bio: { type: String }, 
  is_verified: { type: Boolean, default: false }, 
  preferences: { type: Schema.Types.Mixed }, 
  password: { type: String, required: true }, 
  refreshToken: { type: String, unique: true }, 
  roles: { type: [Schema.Types.ObjectId], ref: 'Role', required: true },
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const User = model<IUser>('User', userSchema);

export default User;