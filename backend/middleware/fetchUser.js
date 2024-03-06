
const jwt = require('jsonwebtoken')

// this function is called to extract user from auth token and add it to req body.
// the token is sent as a header to this endpoint
const fetchUser = (req, res, next) => {

    // get the user from the jwt token and add it to req object
    const token = req.header('authtoken');
    if(!token) {
        res.status(401).send({error: "invalid token"})
    }
    try {
        const data = jwt.verify(token, "jfibgvierjkfrgbre") //verify and decrypt the auth token
        req.user = data.user; // append the data of auth token to req
        next();
    }
    catch(error) {
        res.status(401).send({error: "invalid token"})
    }
}

module.exports = fetchUser