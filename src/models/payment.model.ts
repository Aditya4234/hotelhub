import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  bookingId: mongoose.Types.ObjectId;
  amount: number;
  currency: string;
  status: 'success' | 'failed';
  method: string;
  paidAt: Date;
}

const PaymentSchema = new Schema<IPayment>({
  bookingId: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'INR' },
  status: { type: String, enum: ['success', 'failed'], required: true },
  method: { type: String, required: true },
  paidAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);
