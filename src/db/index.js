import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const ConnectDB = async () => {
    try{
        const ConnectionInstance =await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MONGO DB CONNECT : CONNECTION HOST  ${ConnectionInstance.connection.host}`);
    } 
    catch(error){
        console.error("Error: " + error)
        process.exit(1);
    }
};