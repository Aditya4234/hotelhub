export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: 'success' | 'failed';
  method: string;
  paidAt: string;
}

export const payments: Payment[] = [];
