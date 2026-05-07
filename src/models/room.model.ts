import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  hotelId: mongoose.Types.ObjectId;
  name: string;
  type: string;
  capacity: number;
  price: number;
  available: boolean;
}

const RoomSchema = new Schema<IRoom>({
  hotelId: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
}, {
  timestamps: true,
});

export const Room = mongoose.model<IRoom>('Room', RoomSchema);
