import { Request, Response } from "express";


export function shortUrl(req:Request, res:Response){
    res.redirect("https://google.com")
}