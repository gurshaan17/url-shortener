import express from "express"
import { shorten } from "./shorten"
import { shortUrl } from "./shortUrl"

const app = express()
app.use(express.json())


app.post('/shorten',shorten)
app.get('/short',shortUrl)

app.listen(3000)
