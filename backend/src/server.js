import express from "express"
import path from "path"
import notesRoute from './routes/notes.js'
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"
import rateLimiter from "../middlewares/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express()
const __dirname= path.resolve()


app.use(express.json())
app.use(rateLimiter)
app.use("/api/notes", notesRoute)

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../frontend","dist")))

    app.get(/.*/, (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });

}
else{
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}


connectDB().then(()=>{
    app.listen(5000,() =>{
    console.log("server is running on port 5000")
})
});

