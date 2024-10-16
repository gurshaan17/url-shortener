import { Request, Response } from "express";

export function shorten(req: Request,res: Response){
    const longUrl: string = req.body.url;
    console.log(longUrl)
    res.send("hello ")
}