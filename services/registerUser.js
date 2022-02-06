const { getUserByEmail } = require("../db-access/user-access");
const { hashPassword } = require("../utility");
const {createNewUser} = require('../db-access/insertions')

async function registerUserService (firstname,lastname,email,pass){
    const foundUser = await getUserByEmail(email)
    console.log(email)
    if (foundUser){
        throw new Error("User with this email already exists! Please log in.")
    }
    const passwordHash = hashPassword(pass)
    const newUser = {firstname,lastname,email,passwordHash}
    const result = await createNewUser(newUser)
    // if(!result.acknowledged) {
    //     throw new Error('Failed to create new user, please try again another time.')
    // }  
    return  
}

module.exports = {registerUserService}