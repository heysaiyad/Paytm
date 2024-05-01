const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mrsaiyad62:s0ItH6FMhqc4JbWq@todocluster.elqvkzo.mongodb.net/paytmdb");

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
	User
};

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	Account
}























/*
//👀 Ugly Solution
// mongoDB Connetion
mongoose.connect("mongodb+srv://mrsaiyad62:s0ItH6FMhqc4JbWq@todocluster.elqvkzo.mongodb.net/paytmdb")

// User Schema
const userSchema = new Schema({
    firstname:String,
    lastname:String,
    username:String,
    password:String
})

// Model
const User = mongoose.model('User', userSchema );

module.exports = {User};
*/