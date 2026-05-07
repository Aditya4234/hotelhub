import mongoose, { Schema, Document } from 'mongoose';

export interface IHotel extends Document {
  name: string;
  city: string;
  address: string;
  rooms: number;
  pricePerNight: number;
  rating: number;
  image: string;
}

const HotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  rooms: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  image: { type: String, required: true },
}, {
  timestamps: true,
});

export const Hotel = mongoose.model<IHotel>('Hotel', HotelSchema);
