require("dotenv").config();
import mongoose, { Schema, Document } from "mongoose";

interface Data extends Document{
    id: string,
    shortUrl: string,
    longUrl: string
}

const dataSchema = new Schema<Data>({
    id: { type: String, required: true },
    shortUrl: { type: String, required: true },
    longUrl: { type: String, required: true },
})

export const dataModel = mongoose.model<Data>("data",dataSchema)

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in env");
        }

        await mongoose.connect(mongoUri, {
            dbName: "main",
        });

        console.log("DB connected");
    }
    catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};