import mongoose from 'mongoose';


export const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true},
    phoneNumber: {type: String},
    password: {type: String},
    role: {type: String},
    isApproved: {type: Boolean},
    isAdmin: {type: Boolean},
    lastChangedPassword: {type: Date}
});

//Create the user model
const User = new mongoose.model('user', userSchema)