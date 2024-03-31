import File from "../models/files.js";
import dotenv from "dotenv"
dotenv.config()

let BASE = process.env.BASE_URI;

export const uploadImage = async(req,res)=>{
  const fileobj = {
    path:req.file.path,
    name:req.file.originalname
  }

  try {
    const file = await File.create(fileobj)
    res.status(200).json({path:`${BASE}/file/${file._id}`})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error:error.message})
  }
}

export const downloadImage = async(req,res)=>{
  try {
    const file = await File.findById(req.params.fileId)

    file.downloadContent++;

    await file.save()

    res.download(file.path,file.name)

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({error:error.message})
  }
}