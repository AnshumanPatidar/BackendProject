import express from 'express'

const app = express();

import cors from 'cors'
import cookieParser from 'cookie-parser'


// .use() is used to show middleware and if your are configuring 
app.use(cors({
  
     origin : process.env.CORS_ORIGIN,
    credentials : true
}))

// now preparing for various data that can come into our backend
// throught middlewares

// 1.
app.use(express.json({limit : "16kb"}))
// express.json()  = hm express ko ready kr rhe h json data ke liye 
// or ye hme bhut saare option deta h like limits 
// apn limit set kr skte h serser or baaki saari chijo ke hisaab se 

// 2.
app.use(express.urlencoded({extended : true , limit : "16kb"}))
// url handel krne ke liye express.urlencoded() use kra h 
// url problem create krta h esliye hum urlencoded use krte h 
// bs express.urlencoded() likh dene se bhi chl jaata h 
// extended hume allow krta h ki hum objects ke andr bhi objects de paaye 
// or limit toh data ki limit 

// 3. 
app.use(express.static("public"))
// public naam dena jruri nhi h pr hmne public folder bna rkha h esliye 
// public folder ko apn ne static bol diya h .. mtlb ki usme public assets honge apne local device pr hi
// like images svg etc 


app.use(cookieParser());
// user ke browser ki cookies apne server se access kr pau or unhe set bhi kr pau(crud opertation ki baat ho rhi h )



// routes import 

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users" , userRouter)






export {app};