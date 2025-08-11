import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config({
    path:"./.env"
});
const mongoUri="mongodb+srv://21bcg1104:inum9@cluster0.zo5x7eo.mongodb.net/ecom-project?retryWrites=true&w=majority&appName=Cluster0"
console.log(mongoUri)

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${mongoUri}`)
        
        
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB