import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  user_id: number;
  user_name: string;
  bank_accounts: string[];
  id: number;
  name: string;
  accounts: {
    bank: string;
    branch: string;
    address: string;
    city: string;
    district: string;
    state: string;
    bank_code: string;
    weather: {
      temp: number;
      humidity: number;
    };
  };
}

const UserSchema: Schema = new Schema({
  user_id: { type: Number, required: true },
  user_name: { type: String, required: true },
  bank_accounts: [{ type: String, required: true }],
  id: { type: Number, required: true },
  name: { type: String, required: true },
  accounts: {
    bank: { type: String, required: true },
    branch: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    bank_code: { type: String, required: true },
    weather: {
      temp: { type: Number, required: true },
      humidity: { type: Number, required: true },
    },
  },
});

export default mongoose.model<IUser>('User', UserSchema);
