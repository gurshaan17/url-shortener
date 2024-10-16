import express from "express"
import { shortUrl } from "./shortUrl"
import { connectDB } from "./db"
import { shorten } from "./shorten"

const app = express()
app.use(express.json())


async function startServer() {
    try {
        await connectDB();
        app.post('/shorten', shorten);
        app.get('/short', shortUrl);

        app.listen(3000);
    } catch (err) {
        console.error("Failed to start server:", err);
    }
}

startServer();
