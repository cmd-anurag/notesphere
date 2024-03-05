const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

// Create a User using: POST "/api/auth/". Does not reuire authentication
router.post('/', [
    body('email').isEmail(),
    body('name').isLength({min: 3}),
    body('password').isLength({min: 8}),

], (req, res)=> {
   
    const errors = validationResult(req); // checking if there are any errors 
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user)).catch(err=> {res.json({error:"Duplicate Error"})});
    // the above line creates a user in the database and returns a promise with the user as a json.
    

})


module.exports = router

