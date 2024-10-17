import express from "express"
import cors from "cors"
import { shortUrl } from "./shortUrl"
import { connectDB } from "./db"
import { shorten } from "./shorten"
require("dotenv").config();

const API_URL = process.env.API_URL
const app = express()
app.use(express.json())
app.use(cors());

async function startServer() {
    try {
        await connectDB();
        app.get('/',(req,res)=>{
            res.status(200).json({ message: "Server working fine"})
        })
        app.post('/shorten', shorten);
        app.get('/:id', shortUrl);

        app.listen(8080);
    } catch (err) {
        console.error("Failed to start server:", err);
    }
}

startServer();
