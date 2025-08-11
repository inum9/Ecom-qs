import mongoose  from "mongoose";
import { dbName } from "./dbName.js";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
const connectDb= async()=>{
        try {
                const connectionInstance=  await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);
                console.log(`database is connected at ${connectionInstance.connection.host}`);
                
        } catch (error) {
            console.log(`error in database connection ${error}`);
            
        }
}
export default connectDb;