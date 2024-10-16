import { Request, Response } from "express";
import { dataModel } from "./db";


export async function shortUrl(req:Request, res:Response){
    try{
        const { id } = req.params;

        if(!id){
            res.status(400).json({ message: "ID required"})
        }

        const data = await dataModel.findOne({
            shortUrl: id
        })

        if(!data){
            res.status(404).json({ message: "Short URL not found"})
        }
        else{
            res.redirect(data?.longUrl)
        }
    }
    catch(err){
        console.log("Error retreiving short URL: ",err);
        res.status(500).json({ message: "Server error"})
    }
}