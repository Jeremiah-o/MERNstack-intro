import Note from "../../models/Note.js"

export async function getAllNotes(req,res){
    try {
        const notes=await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function getNotebyId(req,res) {
    try {
        const notes=await Note.findById(req.params.id)
        if(!notes){ return res.status(404).json({message:"Note not found"})}
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getNotebyId controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function createNote(req,res){
    try {
        const {title,content}= req.body;
        const newNote = new Note({title, content})
        const newSaveNote = await newNote.save()
        res.status(201).json({message:"created this note",newSaveNote})
    } catch (error) {
        console.error("Error in createNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function updateNote(req,res){
    try {
        const {title,content}=req.body
        const updatednote= await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatednote){ return res.status(404).json({message:"Note not found"})}
        res.status(201).json({message:"note updated successfully to ",updatednote})
    } catch (error) {
        console.error("Error in updateNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function deleteNote(req,res){
    try {
        const deleteddnote= await Note.findByIdAndDelete(req.params.id)
        if(!deleteddnote){ return res.status(404).json({message:"Note not found"})}
        res.status(201).json({message:"this note is deleted successfully ",deleteddnote})
    } catch (error) {
        console.error("Error in deleteNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}