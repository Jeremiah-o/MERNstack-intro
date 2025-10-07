import express from "express"
import notesRoute from './routes/notes.js'
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"

dotenv.config();

const app = express()

app.use("/api/notes", notesRoute)

connectDB();

app.listen(5000,() =>{
    console.log("server is running on port 5000")
})