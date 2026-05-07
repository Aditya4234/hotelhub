import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb+srv://adityagupta200807_db_user:A208Yq3AF8DSJEBU@cluster0.eqznvwj.mongodb.net/hotel_management?retryWrites=true&w=majority';

export const dbConfig = { url: DATABASE_URL };

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});
