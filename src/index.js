// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()

//env variable main kuch bhi change kiya toh manually restart karna padega 'npm run dev' command se























/*
import express from "express";
const app = express()


// function connectDb(){}

// connectDb()
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error) => {
            console.log("ERRR:",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);

        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})()
    */