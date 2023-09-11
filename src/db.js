import mongoose, { mongo } from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://mabel:david@clusteroptica.e6pz8i0.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error);
    }
};
