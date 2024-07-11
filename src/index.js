// require("dotenv").config({path: './env'})

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
// // this approach is good but even better approach is to write your code in db folder 
// // the reason we make db folder is to have database related code in one place 

// import express from "express"
// const app = express()

// // always use try and catch while connecting db
//  ( async () => {
//    try {
//     await  mongoose.connect(`${process.env.MONGO_DB_URI}/   ${DB_NAME}`)
//     // if database is connected succ.. also check if app is working fine or not
//     app.on("error" , (error) => { 
//       console.error("ERR" , error)
//       throw error
//     })


//     // if everything is fine then start listening on the decided port
//     app.listen(process.env.PORT , () => {
//       console.log(`App is listening on port ${process.env.PORT}`)
//     })


//    // if database connection is not made than throw error
//    } catch (error) {
//     console.error("ERROR: " , error)
//     throw error
//    }

//   })()

import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'


dotenv.config({
  path: './env'
})


connectDB().then(() => {
  // app.on = Listening for Errors
//You can listen for the error event to handle unexpected errors that might occur in your application.
  app.on('error' , (error) => {
    console.log("ERR: " , error)
    throw error
  })
  app.listen(process.env.PORT || 4000 , () => {
    console.log(`server is runing at ${process.env.PORT}`)
  })
}).catch((err) => {
  console.log('mongo DB connection failed !! ' , err)
})
