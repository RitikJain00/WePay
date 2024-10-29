const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.ugnn6.mongodb.net/WePay');   // connecting database

const customerSchema = new mongoose.Schema({   // customer table schema
    firstName: {
        type: String,
        required: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50 
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50,
        
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
    }
})

const accountSchema = new mongoose.Schema({  // account table schema
    userId: {
        type: mongoose.Schema.Types.ObjectId,   // extract objectId from customer table
        ref: 'Customer',
        required: true
    },

    balance: {
        type: Number,
        required: true
    }
})

const Customer = mongoose.model("Customer" , customerSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    Customer,
    Account
}