import mongoose , {Schema}from 'mongoose'
import  jwt from 'jsonwebtoken';
import bcrypt from  'bcrypt';

const userSchema = new Schema({
   username : {
      type : String,
      required : true,
      unique : true,
      lowercase : true,
      trim : true,
      // if you know that this field will be searched regularly
      // then put its index : true to get it inside searching of data base
      // nhi aaye smjh me toh video dekh lena 
      // hr kisi ko index mt kr dena nhi toh performance bigaad jaaye gi
      index : true,
   },
    email : {
      type : String,
      required : true,
      unique : true,
      lowercase : true,
      trim : true,
  
 },
    fullname : {
      type : String,
      required : true,
      trim : true,
      index : true
 },
 avatar : {
     type : String, // cloudnary url use krenge
     required : true
 },
 coverImage : {
     type : String , // cloudnary url use krenge
 },
 watchHistory : [
   {
    type : Schema.Types.ObjectId,
    ref: "Video"
   }
 ],
 password : {
  type : String,
  required : [true , 'Password is required']
 }
} , {timestamps : true});


userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")){
      return next()
    }
    this.password = bcrypt.hash(this.password , 10);
    next();
})


userSchema.methods.isPasswordCorrect = async function (password) {
  return  await bcrypt.compare(password  , this.password)
}


export const User = mongoose.model("User" , userSchema)