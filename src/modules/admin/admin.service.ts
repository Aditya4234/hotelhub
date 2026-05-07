import { getDashboardStats } from '../dashboard/dashboard.service';

export async function getAdminStats() {
  return getDashboardStats();
}
