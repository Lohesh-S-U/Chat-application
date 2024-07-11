import mongoose from "mongoose"

const connectToMongoDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
    }catch(error){
        console.log("Couldn't connect to MongoDB",error.message);
    }
};

export default connectToMongoDb;