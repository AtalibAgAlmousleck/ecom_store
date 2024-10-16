import mongoose from "mongoose";

export const connectionDB = async function () {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongoose database at ${connect.connection.host}`);
  } catch (error) {
    console.log(`Failed to connect to Mongoose database ${error.message}`);
    process.exit(1);
  }
};
