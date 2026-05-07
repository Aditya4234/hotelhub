import app from './app';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
// Vercel serverless export
export default app;

// Only start listening when running directly (not via Vercel serverless)
const isVercel = process.env.VERCEL === '1';
//

if (!isVercel) {
  const PORT = process.env.PORT || 5000;
  
  // Connect to MongoDB before starting the server
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
}
