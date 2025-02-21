import mongoose from "mongoose";

const DATABASE = "grocery";
const CONNECTION_URI = "mongodb://localhost:27017/" + DATABASE;

export const connectToMongoDB = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI);
    if (connect) {
      console.log(`Database connected successfully at ${CONNECTION_URI}`);
    }
  } catch (error) {
    console.log(error.message);
  }
};
