import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    //  console.log(`\n ${connectionInstance}`);
    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongoDB connection FAILED : ", error);
    process.exit(1); // process ke baare me padhna h nodejs me
    // 1 ki place pr 0 bhi hota h kbhi kbhi pr kyu hota h vo ap apnko pta lgana h
  }
};

export default connectDB;
