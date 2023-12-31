import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        const mongoURI = process.env.MONGO_DB_URI || ""; // Set a default value if MONGO_DB_URI is undefined
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    }
    catch(error){
        console.log(error);
    }
};

export default connectMongoDB;