// use the detenv virtual environment 
//require('dotenv').config({path :'./env'})
import dotenv from "dotenv"
//use mongoose to connect the database 
//import mongoose from "mongoose"
// connect the name of the database
// import {DB_NAME} from "./constants"

import connectDB from "./db/index.js";
dotenv.config({
    path :'./env'
})
connectDB()













/*
// first approach we use 
// to connect the app file as well we use 
import express from"express"
const app = express() ;


// concept of effe(immediately execute the function) two parenthesis
;( async ()=>{
    try{
        //process ke through hi connect hoga 
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       //listener are use 
       app.on("error",(error)=>{
        console.log("error :",error);
        throw error
       })
        app.listen(process.env.PORT ,()=>{
            console.log(`App is listening on the prot ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR :" , error)
        throw error 
    }
})()
*/