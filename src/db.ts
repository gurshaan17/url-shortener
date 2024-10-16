require("dotenv").config();
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the env");
        }

        await mongoose.connect(mongoUri, {
            dbName: "main",
        });

        console.log("DB connected");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};