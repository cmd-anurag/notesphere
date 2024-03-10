const express = require('express');
const router = express.Router(); // to create different routes
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs'); // password hashing library
const jwt = require('jsonwebtoken'); // authentication library
var fetchUser = require('../middleware/fetchUser')

const JWTSECRET = 'jfibgvierjkfrgbre'

// ROUTE- 1 Create a User using: POST "/api/auth/createUser". Does not reuire authentication
router.post('/createUser', [

    body('email').isEmail(),
    body('name').isLength({min: 3}),
    body('password').isLength({min: 8}),

], async (req, res)=> {
   
    const errors = validationResult(req); // checking if there are any errors 
    if(!errors.isEmpty()) {
        return res.status(400).json({result: false, errors: errors.array()});
    }


    try {
        // Check if the user with the given email exists already
    let user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400).json({result: false, error: "A user with this email already exists"})
    }

    // adding a salt and creating a hash for password provided by user
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user if no user was found with the same email
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })

    const data = {
        user: {
            id: user.id
        }
    }
    
    const authToken = jwt.sign(data, JWTSECRET);
    res.json({result: true, authtoken: authToken})
    }
    catch(error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }
})

// ROUTE 2 - Route to verify a user using: POST "/api/auth/login"

router.post('/login', [

    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Invalid Password').exists(),

], async (req, res) => {
    const errors = validationResult(req); // checking if there are any errors 
    if(!errors.isEmpty()) {
        return res.status(400).json({result: false, errors: errors.array()});
    }


    const {email, password} = req.body;
    try {
        // trying to find if the user with the provided email exists
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({result: false, error: "User does not exist"})
        }
        // comparing the passwords
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {return res.status(400).json({result: false, error: "Incorrect Credentials"})
    }
    // if passwords match
    const data = {
        user: {
            id: user.id
        }
    }
    // if a user is succesfully logged , return the id of the user as the data of auth token.
    const authToken = jwt.sign(data, JWTSECRET);
    res.json({result: true, authtoken: authToken})

    }
    catch(error) {
        res.status(500).send("Internal Server Error")
        console.error(error.message)
    }

})

// ROUTE 3 - Route to fetch user details using : POST "/api/auth/getuser"

router.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.json({user});
    } catch (error) {
        res.status(500).send("Internal Server Error")
            console.error(error.message)
    }
})


module.exports = router