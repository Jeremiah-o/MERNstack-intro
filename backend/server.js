import express from "express"
import notesRoute from './routes/notes.js'

const app = express()

app.use("/api/notes", notesRoute)


app.listen(5000,() =>{
    console.log("server is running on port 5000")
})