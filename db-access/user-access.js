const { _getDb } = require("./_getDb")
    
async function getAllUsers(){ 
    const db = await _getDb()
    const userArray = await db.collection("users")
    .find().toArray()
    return userArray
}
async function getUserByEmail(email){
    const db = await _getDb()
    const foundUser = await db.collection('users').findOne({email})
    return foundUser
}

module.exports = {getUserByEmail}