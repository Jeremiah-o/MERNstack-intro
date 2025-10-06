import express from "express"
const router= express.Router()

export default router;

router.get("/", (req,res) =>{
    res.status(200).send("you have no notes")
})

router.post("/", (req,res)=>{
    res.status(201).json({message:"created successfully"})
})

router.put("/:id", (req,res)=>{
    res.status(200).json({message:"updated successfully"})
})

router.delete("/:id", (req,res)=>{
    res.status(200).json({message:"deleted successfully"})
})
