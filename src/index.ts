import express from "express"
import { shortUrl } from "./shortUrl"
import { connectDB } from "./db"
import { shorten } from "./shorten"

const app = express()
app.use(express.json())


async function startServer() {
    try {
        await connectDB();
        app.get('/',(req,res)=>{
            res.status(200).json({ message: "Server working fine"})
        })
        app.post('/shorten', shorten);
        app.get('/:id', shortUrl);

        app.listen(3001);
    } catch (err) {
        console.error("Failed to start server:", err);
    }
}

startServer();
