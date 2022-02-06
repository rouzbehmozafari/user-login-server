const {getUserByEmail} = require('../db-access/user-access')
const {hashPassword} = require('../utility/index')
const {generateToken} = require('../utility/index')
async function loginUserService(email,pass){
    const foundUser = await getUserByEmail(email)
    if(!foundUser) {
        throw new Error('User not found!')
    }
    const passHash = hashPassword(pass)
    const passIsCorrect = foundUser.passwordHash === passHash
    if(!passIsCorrect){
        throw new Error('Email and Password do not match.')
    }
    const token = generateToken(foundUser)
}

module.exports = {loginUserService}