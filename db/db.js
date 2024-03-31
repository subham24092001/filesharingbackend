import mongoose from "mongoose"

const DBConnection = async()=>{
    const URI = process.env.DB_URL
    try {
        await mongoose.connect(URI)
        console.log("Connection Succesfull")
    } catch (error) {
        console.log("Error during connection to database : ",error.message)
    }
}

export default DBConnection