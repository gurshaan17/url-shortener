import { Request, Response } from "express";
import base62 from "base62";
import { dataModel } from "./db";

export async function shorten(req: Request,res: Response){
    try{
        console.log('Request body:', req.body);
        const longUrl: string = req.body.url;
        if(!longUrl){
            res.status(400).json({ message: "URL is required"})
        }

        const randomId = Math.floor(Math.random() * 100000000000).toString()
        const shortUrl = base62.encode(parseInt(randomId))

        const newData = new dataModel({
            id: randomId,
            shortUrl: shortUrl,
            longUrl: longUrl
        })

        await newData.save()

        res.status(201).json({
            message: "Short URL created successfully",
                data: {
                    id: randomId,
                    shortUrl: shortUrl,
                    longUrl: longUrl
                }
        })
    }
    
    catch(err){
        console.error("Error creating short URL:", err);
        res.status(500).json({ message: "Server error" });
    }
}