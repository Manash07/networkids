import mongoose from "mongoose";

export const connectDatabase = async () =>{

    try{

        await mongoose.connect(process.env.MONGO_URI) // Connect to the MongoDB database using the connection string from environment variables
        console.log("Database connected successfully")

    }catch(error){

        console.log("Database connection failed", error)

    };
}