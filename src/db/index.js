import mongoose from "mongoose";
// also use the database name here
// inside the constant folder we use  

import {DB_NAME} from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST : ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.log(`Mongo DB connection error `)
        // node js mai process hota hai 
        process.exit(1)
    }
}

export default connectDB
