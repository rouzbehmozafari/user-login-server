const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const hashPassword = (password) =>{
    return crypto.createHash('sha256').update(password,'utf8').digest('hex')
}

const generateToken=(user)=>{
    const NOW = Date.now() / 1000
    const ONE_DAY = 24*60 * 60
    const NOW_IN_ONE_DAY = NOW + ONE_DAY
    const token = jwt.sign({
        sub : user._id,
        iat : NOW,
        exp : NOW_IN_ONE_DAY,
        type : "access_token"
    },process.env.JWT_SECRET)

    return token
}

module.exports = {hashPassword,generateToken}