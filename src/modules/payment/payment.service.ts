import { Payment } from '../../models/payment.model';

export async function getAllPayments() {
  return Payment.find()
    .populate({
      path: 'bookingId',
      populate: [
        { path: 'userId', select: 'name email' },
        { path: 'hotelId', select: 'name city' },
        { path: 'roomId', select: 'name type' },
      ],
    })
    .sort({ createdAt: -1 });
}

export async function createPayment(payload: {
  bookingId: string;
  amount: number;
  currency?: string;
  status: 'success' | 'failed';
  method: string;
}) {
  const payment = await Payment.create({
    bookingId: payload.bookingId,
    amount: payload.amount,
    currency: payload.currency || 'INR',
    status: payload.status,
    method: payload.method,
  });

  return payment.populate({
    path: 'bookingId',
    populate: [
      { path: 'userId', select: 'name email' },
      { path: 'hotelId', select: 'name city' },
      { path: 'roomId', select: 'name type' },
    ],
  });
}
