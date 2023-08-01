const express = require('express')
const router = express.Router()
const userModel = require("./userModel");
const bcrypt = require("bcrypt")
const util = require('util')
const jwt = require('jsonwebtoken');
const CustomError = require('./CustomError');
const AsyncAsign = util.promisify(jwt.sign)

/*SignUp*/
router.post("/", async (req, res) => {
    const { FirstName, LastName, UserName, password, PhoneNumber , Address } = req.body;

    /*const exist = await userModel.findOne({UserName})
    if(exist)
    {
      next(CustomError({
        stateCod: 401,
        message: "user is already exist"
      }))
    }*/
    const newUser = await userModel.create({
      FirstName,
      LastName,
      UserName,
      password,
      PhoneNumber,
      Address
    });

    // Validate user input
   /* if (!FirstName || !LastName || !UserName || !password || !PhoneNumber || !Address) {
      return res.status(400).send('FirstName, LastName, UserName, password are required');
    }*/

    const addUser = await newUser.save()
    res.status(200).send(newUser);
  
  });
  //-----------------------------------------------------------------------------------------------------------------------------------

  /*LogIn*/
  router.post('/login', async (req, res, next) => {
    const { UserName, password } = req.body
    const FindUSer = await userModel.findOne({ UserName })
    if (!FindUSer)
      next(CustomError({
        stateCod: 401,
        message: "User or password Invalid"
      }))

    const passcompare = await bcrypt.compare(password, FindUSer.password)
      if(!passcompare)
      next(CustomError({
        stateCod: 401,
        message: "User or password Invalid"
      }))

    const token = await FindUSer.generateToken()
     if(!token)
    next(CustomError({
     stateCod: 401,
     message: "User or password Invalid"
    }))
res.json({token})


})


/*app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Validate user input
    if (!name || !email || !password) {
      return res.status(400).send('Name, email, and password are required');
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);
}*/

module.exports = router