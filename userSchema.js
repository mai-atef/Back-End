const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const util = require('util')
const jwt = require('jsonwebtoken')
const AsyncAsign = util.promisify(jwt.sign)
const secrtkey = 'amk3'

const userSchema = mongoose.Schema({
    FirstName: "string",
    LastName: "string",
    UserName: "string",
    password: "string",
    PhoneNumber: "string",
    Address: "string"
})

// hashing password 
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        const salatRound = 5
        const HashPassword = await bycrpt.hash(this.password, salatRound)
        this.password = HashPassword
    }
})

//sign token
userSchema.methods.generateToken = function () {

    const token = AsyncAsign({
        id: this.id,
        UserName: this.UserName
    }, secrtkey)
    return token
}

module.exports = userSchema ;

/*const userShcema = mongoose.Schema({
    FirstName: "string",
    LastName: "string",
    UserName: "string",
    password: "string",
    PhoneNumber: "Number",
    Address: "string"
})
module.exports = userShcema ;*/