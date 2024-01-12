import { Schema } from "mongoose";

const UserShema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },

    
})