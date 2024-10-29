const express = require('express')
const router = express.Router();
const { customerValidate, cutomerUpdate } = require('../types.js')
const  customerMiddleware  = require('../Middleware/customerMiddleware.js')
const { Customer, Account } = require('../Db/db_schema.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  JWTSecret  = require('../config.js')


router.post('/signup', async (req,res) => {         // Sign up route
    const obj = req.body;

    const validate =  customerValidate.safeParse(obj);

    if(!validate.success)
    {
        return res.json({
            msg: "Invalid Input"
        })
    }

    const checkCustomer = await Customer.findOne({userName: obj.userName})

    if(checkCustomer)
    {
        return res.json({
            msg: "Customer is already exist"
        })
    }

    else{
        const hashedPassword = await bcrypt.hash(obj.password,10);

         const user = await Customer.create({
            firstName: obj.firstName,
            lastName: obj.lastName,
            userName: obj.userName,
            password: hashedPassword
        })
       
        const userId = user._id;
        const initialBalance = 1 + Math.random() * 1000

        await Account.create({          // Creating new account
            userId: userId,
            balance: initialBalance
        })

        res.send({
            msg:   `Customer Created Successfully Your Initial Balance is : ${initialBalance} Please Sigin in for transactions`
        })
    }

})

router.post('/signin', async (req,res) => {         // Sign in Route
    const userName = req.body.userName;
    const password = req.body.password;

    const checkCustomer = await Customer.findOne({userName: userName})

    if(!checkCustomer)
    {
        return res.json({
            msg: "Customer not exist"
        })
    }

    const checkPassword = await bcrypt.compare(password,checkCustomer.password);

    if(!checkPassword)
    {
        return res.json({
            msg: "Password does'nt match"
        }) 
    }

    const token = jwt.sign({userId: checkCustomer._id},JWTSecret)  // creating token

    res.json({
        msg: "You are signed in",
        token: token
    });

})



router.put('/update', customerMiddleware , async (req,res) => {     // updation Route
    const check = cutomerUpdate.safeParse(req.body)

    if(!check.success){
        return res.status(411).json({
            msg: "Updation not successfull because input is not valid"
        })
    }

    if(req.body.password){
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        req.body.password = hashedPassword
    }

    Customer.updateOne(
        {_id: req.userId},
        req.body)
        .then(() => {
            res.json({
                msg: "Updation Successfull"
            })
        })
})

router.get('/bulk', async(req,res) => {             // get all users route
    const filter = req.query.filter || "";

    const users = await Customer.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        },{
        lastName: {
            "$regex": filter
        }
    }]
    })

    res.json({
        user: users.map(user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;