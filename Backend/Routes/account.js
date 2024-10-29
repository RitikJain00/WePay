const express = require('express');
const customerMiddleware = require('../Middleware/customerMiddleware.js');
const { Account } = require('../Db/db_schema.js');
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get('/balance',customerMiddleware, async(req,res) => {       // get balance route
    const account = await Account.findOne({
        userId: req.userId,  
    })

    res.json({
        balance: account.balance
    })
})


router.post('/transfer',customerMiddleware, async(req,res) => {   // Transaction route
    const session = await mongoose.startSession();

     session.startTransaction()

    const {amount , to} = req.body;

    if (!mongoose.Types.ObjectId.isValid(to)) {     // check transfer account objectid
        await session.abortTransaction();
        return res.status(400).json({ msg: "Invalid Account ID format" });
    }

    
    const account = await Account.findOne({userId: req.userId}).session(session);

   
    if(!account || account.balance < amount){  // checking balance
         await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient Balance"
        })
    }
    
    const toAccount = await Account.findOne({userId: to}).session(session);  
    
    if(!toAccount){         // checking transfer account present or not
        await  session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid Account"
        })
    }

    await Account.updateOne(        // updating balance
        {userId: req.userId},
        { $inc: {
                balance: -amount
        }}).session(session)

        await Account.updateOne(
            {userId: to},
            { $inc: {
                    balance: amount
            }}).session(session)


     await session.commitTransaction();

    res.json({
        msg: "Transaction Successfull"
    })
    

})



module.exports = router;