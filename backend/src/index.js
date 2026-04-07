import dotenv from "dotenv";
import connectDB from "./config/database"

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    
  }
}