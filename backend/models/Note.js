import mongoose from "mongoose";

//creating a schema
const noteScema= new mongoose.Schema(
    {
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
    },
    {timestamps:true}
)

//creating a model
const Note= mongoose.model("Note",noteScema);

export default Note;