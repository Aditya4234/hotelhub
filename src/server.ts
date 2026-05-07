import app from './app';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
// Vercel serverless export
export default app;

// Only start listening when running directly (not via Vercel serverless)

//

const port = process.env.PORT || 10000;
  
  // Connect to MongoDB before starting the server
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

