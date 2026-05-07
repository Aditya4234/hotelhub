import { User } from '../../models/user.model';
import { Hotel } from '../../models/hotel.model';
import { Booking } from '../../models/booking.model';
import { Payment } from '../../models/payment.model';

export async function getDashboardStats() {
  const [totalUsers, totalHotels, totalBookings, payments] = await Promise.all([
    User.countDocuments(),
    Hotel.countDocuments(),
    Booking.countDocuments(),
    Payment.find(),
  ]);

  const totalRevenue = payments
    .filter(p => p.status === 'success')
    .reduce((sum, p) => sum + p.amount, 0);

  return {
    totalUsers,
    totalHotels,
    totalBookings,
    totalRevenue,
  };
}
