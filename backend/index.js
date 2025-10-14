//running our express api using this file

import express from 'express'

const app = express();

app.use("/test", (req,res)=> {
    return res.json("Hello from backend API")
})

app.listen(3000, () => {
    console.log("Server is running!")
})