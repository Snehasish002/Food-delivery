import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://snehasish:9937940256@cluster0.stswz.mongodb.net/food-delivery')
    .then(() => 
        console.log("DB Connected")
    );
}