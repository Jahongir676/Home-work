import mongoose from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB ulandi');
  } catch (error) {
    console.error('MongoDB ulanishda xatolik:', error);
    process.exit(1);
  }
};

export default db;
